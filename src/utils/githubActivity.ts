/**
 * This is a reverse engineering from the repository
 * https://github.com/sallar/github-contributions-chart
 *
 */
import * as cheerio from 'cheerio'
import _ from 'lodash'
import { AllYearsData, ContributionData, ContributionValue, YearLink } from '@/types/GitHubChart'

const COLOR_MAP: Record<number, string> = {
  0: '#ebedf0',
  1: '#9be9a8',
  2: '#40c463',
  3: '#30a14e',
  4: '#216e39',
}

async function fetchYears(username: string): Promise<YearLink[]> {
  const data = await fetch(`https://github.com/${username}?tab=contributions`, {
    headers: {
      'x-requested-with': 'XMLHttpRequest',
    },
  })
  const body = await data.text()
  const $ = cheerio.load(body)
  return $('.js-year-link.filter-item')
    .get()
    .map((a) => {
      const $a = $(a)
      const href = $a.attr('href')
      if (!href) throw new Error('Year link does not have an href')
      const githubUrl = new URL(`https://github.com${href}`)
      githubUrl.searchParams.set('tab', 'contributions')
      const formattedHref = `${githubUrl.pathname}${githubUrl.search}`

      return {
        href: formattedHref,
        text: $a.text().trim(),
      }
    })
}

async function fetchDataForYear(
  url: string,
  year: string,
  format: 'flat' | 'nested',
): Promise<ContributionData> {
  const data = await fetch(`https://github.com${url}`, {
    headers: {
      'x-requested-with': 'XMLHttpRequest',
    },
  })
  const $ = cheerio.load(await data.text())
  const $days = $(
    'table.ContributionCalendar-grid td.ContributionCalendar-day',
  )

  const contribText = $('.js-yearly-contributions h2')
    .text()
    .trim()
    .match(/^([0-9,]+)\s/)
  let contribCount = 0
  if (contribText) {
    contribCount = parseInt(contribText[1].replace(/,/g, ''), 10)
  }

  return {
    year,
    total: contribCount || 0,
    range: {
      start: $($days.get(0)).attr('data-date'),
      end: $($days.get($days.length - 1)).attr('data-date'),
    },
    contributions: (() => {
      const parseDay = (
        day: any,
        index: number,
      ): { date: number[]; value: ContributionValue } => {
        const $day = $(day)
        const date = ($day.attr('data-date') || '')
          .split('-')
          .map((d) => parseInt(d, 10))
        const color = COLOR_MAP[+$day.attr('data-level')!] || '#ebedf0'
        const value: ContributionValue = {
          date: $day.attr('data-date') || '',
          count: index === 0 ? contribCount : 0,
          color,
          intensity: $day.attr('data-level') || 0,
        }
        return { date, value }
      }

      if (format !== 'nested') {
        return $days.get().map((day, index) => parseDay(day, index).value)
      }

      return $days.get().reduce((o, day, index) => {
        const { date, value } = parseDay(day, index)
        const [y, m, d] = date
        if (!o[y]) o[y] = {}
        if (!o[y][m]) o[y][m] = {}
        o[y][m][d] = value
        return o
      }, {} as Record<number, Record<number, Record<number, ContributionValue>>>)
    })(),
  }
}

export async function fetchDataForAllYears(username: string, format: 'flat' | 'nested'): Promise<AllYearsData> {
  const years = await fetchYears(username)
  const resp = await Promise.all(
    years.map((year) => fetchDataForYear(year.href, year.text, format)),
  )

  return {
    years: (() => {
      if (format === 'nested') {
        const obj: Record<string, ContributionData> = {}
        resp.forEach((year) => {
          _.setWith(obj, [year.year], year, Object)
        })
        return obj
      } else {
        return resp.map((year) => ({
          ...year,
          contributions: Array.isArray(year.contributions) ? year.contributions : [],
        }))
      }
    })(),
    contributions:
      format === 'nested'
        ? resp.reduce(
          (acc, curr) =>
            _.merge(acc, curr.contributions) as Record<
              number,
              Record<number, Record<number, ContributionValue>>
            >,
          {},
        )
        : resp
          .reduce((list, curr) => [...list, ...(Array.isArray(curr.contributions) ? curr.contributions : [])], [] as ContributionValue[])
          .sort((a, b) => {
            if (a.date < b.date) return 1
            if (a.date > b.date) return -1
            return 0
          }),
  }
}

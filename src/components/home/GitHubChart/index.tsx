'use client'

import SectionTitle from '@/components/common/SectionTitle'
import React, { useEffect, useRef } from 'react'
import { fetchData } from '@/app/actions'
import { drawContributions } from 'github-contributions-canvas'
import { DataStruct } from '@/types/GitHubChart'

export default function GitHubChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawChart = async () => {
    const data = await fetchData()
    if (!data) {
      console.error('Could not fetch data')
      return
    }

    drawContributions(canvasRef.current!, {
      data: data as DataStruct,
      username: 'mrLuisFer',
      themeName: 'githubDark',
      footerText: 'Made by @sallar & friends - github-contributions.vercel.app',
    })
  }

  useEffect(() => {
    drawChart().then(r => {
    })
  }, [])

  return (
    <div className="pt-4">
      <SectionTitle
        className="bg-gradient-to-tr from-green-200 to-green-100 bg-clip-text text-transparent"
        glowProps={{
          color: '#2dba4e',
        }}
      >
        GitHub Activity
      </SectionTitle>
      <>
        <div className="flex justify-center items-center">
          <canvas ref={canvasRef} className="rounded-xl" />
        </div>
        <section className="flex justify-center items-center gap-2">
          <p>Inspired by the website{' '}
            <a className="text-green-400 hover:text-green-300 transition"
               href="https://github-contributions.vercel.app" target="_blank"
               rel="noreferrer noopener">
              github-contributions.vercel.app
            </a>
          </p>
        </section>
      </>
    </div>
  )
}

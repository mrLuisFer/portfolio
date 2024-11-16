import { GradientColors } from 'src/utils/gradientColors'
import paths from 'src/constants/paths'
import { facebook, github, linkedin, twitter, gitlab } from 'src/utils/socialLinks'

interface FooterLink {
  label: string
  href: string
  isExternal: boolean
}

interface FooterElements {
  title: string
  titleColor: keyof GradientColors
  links: FooterLink[]
}

export const getFooterElements = (t: (key: string) => string): FooterElements[] => [
  {
    title: t('social'),
    titleColor: 'darkBlue',
    links: [
      { label: 'Twitter', href: twitter, isExternal: true },
      { label: 'GitHub', href: github, isExternal: true },
      { label: 'LinkedIn', href: linkedin, isExternal: true },
      { label: 'Facebook', href: facebook, isExternal: true },
      { label: 'Gitlab', href: gitlab, isExternal: true },
    ],
  },
  {
    title: t('navigateTo'),
    titleColor: 'orange',
    links: [
      {
        label: t('contact'),
        href: paths.contact,
        isExternal: false,
      },
      {
        label: t('projects'),
        href: paths.projects,
        isExternal: false,
      },
      {
        label: 'Blog',
        href: 'https://mrluisfer-blog.netlify.app/',
        isExternal: true,
      },
    ],
  },
  {
    title: t('other'),
    titleColor: 'yellow',
    links: [
      {
        label: 'Seo Generator',
        href: 'https://seo-generator.vercel.app/',
        isExternal: true,
      },
      {
        label: 'Linktry',
        href: 'https://linktry-mrluisfer.vercel.app/',
        isExternal: true,
      },
      {
        label: 'GitHub User Finder',
        href: 'https://gh-find.netlify.app/',
        isExternal: true,
      },
      {
        label: 'Git Basic Guide',
        href: 'https://git-guia.netlify.app/',
        isExternal: true,
      },
      {
        label: `${t('moreProjects')}...`,
        href: 'https://github.com/mrLuisFer?tab=repositories',
        isExternal: true,
      },
    ],
  },
]

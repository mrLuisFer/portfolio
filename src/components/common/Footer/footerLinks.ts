import { GradientColors } from 'src/utils/gradientColors'
import paths from 'src/constants/paths'
import {
  facebook,
  github,
  linkedin,
  twitter,
  gitlab,
} from 'src/utils/social-links/socialLinks'

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

export const footerElements: FooterElements[] = [
  {
    title: 'Social',
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
    title: 'Navigate to',
    titleColor: 'orange',
    links: [
      {
        label: 'Contact',
        href: paths.contact,
        isExternal: false,
      },
      {
        label: 'Projects',
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
    title: 'Other',
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
        label: 'More projects...',
        href: 'https://github.com/mrLuisFer?tab=repositories',
        isExternal: true,
      },
    ],
  },
]

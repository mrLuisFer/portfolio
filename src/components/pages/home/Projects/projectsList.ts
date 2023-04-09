import { v4 } from 'uuid'
import { IconType } from 'react-icons/lib'
import { FaReact, FaSass } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import {
  SiTailwindcss,
  SiChakraui,
  SiSocketdotio,
  SiJavascript,
  SiHtml5,
} from 'react-icons/si'

interface Technology {
  name: string
  icon: IconType
}

interface Project {
  id: string | number
  name: string
  description: string
  image?: string
  link: string
  github: string
  technologies: Technology[]
}

const projectsList: Project[] = [
  {
    id: v4(),
    name: 'Linktry',
    description:
      'A custom version of Linktree and Bento to shows all my social media links and other links in one place',
    image: '/images/projects/linktry.png',
    link: 'https://linktry-mrluisfer.vercel.app',
    github: 'https://github.com/mrLuisFer/linktry',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
      },
      {
        name: 'Next.js',
        icon: TbBrandNextjs,
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
    ],
  },
  {
    id: v4(),
    name: 'Next Chat App',
    description:
      'Just a simple chat app for learn Socket.Io and test with friends or people of the world 🌎',
    // image: '/images/projects/linktry.png',
    link: 'https://nezt-chat.vercel.app/',
    github: 'https://github.com/mrLuisFer/next-chat-app',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
      },
      {
        name: 'Next.js',
        icon: TbBrandNextjs,
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
      },
      {
        name: 'Socket.Io',
        icon: SiSocketdotio,
      },
    ],
  },
  {
    id: v4(),
    name: 'Seo Generator',
    description: 'An app for create Meta-Tags for better preview and SEO in the web',
    image: '/images/projects/seo-generator.png',
    link: 'https://seo-generator.vercel.app/',
    github: 'https://github.com/mrLuisFer/seo-generator',
    technologies: [
      {
        name: 'React',
        icon: FaReact,
      },
      {
        name: 'Next.js',
        icon: TbBrandNextjs,
      },
      {
        name: 'Chakra UI',
        icon: SiChakraui,
      },
    ],
  },
  {
    id: v4(),
    name: 'Terminal Website',
    description: 'A terminal web page made in Typescript just for fun 😄',
    image: '/images/projects/terminal.png',
    link: 'https://terminal-emulator.vercel.app/',
    github: 'https://github.com/mrLuisFer/terminal-website',
    technologies: [
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'Sass',
        icon: FaSass,
      },
      {
        name: 'HTML',
        icon: SiHtml5,
      },
    ],
  },
  {
    id: v4(),
    name: 'Git Guide',
    description:
      'A basic guide to the most necessary commands for using Git with github or gitlab in Spanish',
    image: '/images/projects/git-guide.png',
    link: 'https://git-guia.netlify.app/',
    github: 'https://github.com/mrLuisFer/git-guide',
    technologies: [
      {
        name: 'Javascript',
        icon: SiJavascript,
      },
      {
        name: 'Sass',
        icon: FaSass,
      },
      {
        name: 'HTML',
        icon: SiHtml5,
      },
      {
        name: 'React',
        icon: FaReact,
      },
    ],
  },
]

export default projectsList

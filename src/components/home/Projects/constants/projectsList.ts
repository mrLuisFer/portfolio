import { IconType } from 'react-icons/lib'
import { Technologies } from './technologies'

export interface Technology {
  name: string
  icon: IconType
}

export interface Project {
  id: string | number
  name: string
  description: string
  image?: string
  link: string
  github: string
  technologies: Technologies[]
}

const projectsList: Project[] = [
  {
    id: 1,
    name: 'Linktry',
    description:
      'A custom version of Linktree and Bento to shows all my social media links and other links in one place',
    image: '/images/projects/linktry.png',
    link: 'https://linktry-mrluisfer.vercel.app',
    github: 'https://github.com/mrLuisFer/linktry',
    technologies: [Technologies.react, Technologies.next, Technologies.tailwind],
  },
  {
    id: 2,
    name: 'Next Chat App',
    description:
      'Just a simple chat app for learn Socket.Io and test with friends or people of the world 🌎',
    // image: '/images/projects/linktry.png',
    link: 'https://nezt-chat.vercel.app/',
    github: 'https://github.com/mrLuisFer/next-chat-app',
    technologies: [
      Technologies.react,
      Technologies.next,
      Technologies.chakraui,
      Technologies.socket,
    ],
  },
  {
    id: 3,
    name: 'Seo Generator',
    description: 'An app for create Meta-Tags for better preview and SEO in the web',
    image: '/images/projects/seo-generator.png',
    link: 'https://seo-generator.vercel.app/',
    github: 'https://github.com/mrLuisFer/seo-generator',
    technologies: [Technologies.react, Technologies.next, Technologies.chakraui],
  },
  {
    id: 4,
    name: 'Terminal Website',
    description: 'A terminal web page made in Typescript just for fun 😄',
    image: '/images/projects/terminal.png',
    link: 'https://terminal-emulator.vercel.app/',
    github: 'https://github.com/mrLuisFer/terminal-website',
    technologies: [Technologies.javascript, Technologies.sass, Technologies.html],
  },
  {
    id: 5,
    name: 'Git Guide',
    description:
      'A basic guide to the most necessary commands for using Git with github or gitlab in Spanish',
    image: '/images/projects/git-guide.png',
    link: 'https://git-guia.netlify.app/',
    github: 'https://github.com/mrLuisFer/git-guide',
    technologies: [
      Technologies.javascript,
      Technologies.sass,
      Technologies.html,
      Technologies.react,
    ],
  },
  {
    id: 6,
    name: 'GH Finder',
    description: 'A simple app for search users in Github',
    image: '/images/projects/gh-finder.png',
    link: 'https://gh-find.netlify.app/',
    github: 'https://github.com/mrLuisFer/gh-card-profile',
    technologies: [Technologies.sass, Technologies.html, Technologies.javascript],
  },
  {
    id:7,
    name: 'Planning App',
    description:
      'A planning poker app to select story points, made with React and Supabase',
    image: '/images/projects/planning.png',
    link: 'https://planning-pocket.vercel.app',
    github: '',
    technologies: [
      Technologies.typescript,
      Technologies.supabase,
      Technologies.jira,
      Technologies.tailwind,
    ],
  },
]

export default projectsList

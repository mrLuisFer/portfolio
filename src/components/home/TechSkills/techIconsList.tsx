import { FaReact, FaNodeJs } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit } from 'react-icons/di'
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiTypescript,
  SiSvelte,
} from 'react-icons/si'
import StyledComponentsIcon from '@/components/common/Icons/StyledComponents'
import NestJSIcon from '@/components/common/Icons/NestJs'
import LinuxIcon from '@/components/common/Icons/Linux'
import NextjsIcon from '@/components/common/Icons/NextJs'
import JestIcon from '@/components/common/Icons/Jest'
import VitestIcon from '@/components/common/Icons/Vitest'
import MaterialUIIcon from '@/components/common/Icons/MaterialUi'
import ExpressjsIcon from '@/components/common/Icons/ExpressJs'
import ReactQueryIcon from '@/components/common/Icons/ReactQuery'
import SassIcon from '@/components/common/Icons/Sass'
import PythonIcon from '@/components/common/Icons/Pyhton'
import LuaIcon from '@/components/common/Icons/Lua'
import JavaIcon from '@/components/common/Icons/Java'
import TailwindCSSIcon from '@/components/common/Icons/TailwindCss'
import SvelteIcon from '@/components/common/Icons/Svelte'
import PrettierIcon from '@/components/common/Icons/Prettier'
import ViteIcon from '@/components/common/Icons/Vite'
import DenoIcon from '@/components/common/Icons/Deno'
import ReactRouterIcon from '@/components/common/Icons/ReactRouter'
import JQueryIcon from '@/components/common/Icons/JQuery'
import ChakraUIIcon from '@/components/common/Icons/Chakra'
import BunIcon from '@/components/common/Icons/Bun'

export interface TechIcons {
  icon: any
  label: string
  color?: string
}

export const techIconsList: TechIcons[] = [
  {
    icon: <FaReact />,
    label: 'React',
    color: 'text-[#61DBFB]',
  },
  {
    icon: <AiFillHtml5 />,
    label: 'HTML5',
    color: 'text-[#e34c26]',
  },
  {
    icon: <DiCss3 />,
    label: 'CSS3',
    color: 'text-[#2965f1]',
  },

  {
    icon: <SiJavascript />,
    label: 'JavaScript',
    color: 'text-[#F0DB4F]',
  },
  {
    icon: <NextjsIcon />,
    label: 'Next.js',
    color: 'text-[#ffffff]',
  },
  {
    icon: <FaNodeJs />,
    label: 'NodeJs',
    color: 'text-[#44883e]',
  },
  {
    icon: <SiRedux />,
    label: 'Redux',
    color: 'text-[#764abc]',
  },
  {
    icon: <SiTypescript />,
    label: 'TypeScript',
    color: 'text-[#007acc]',
  },

  {
    icon: <DiGit />,
    label: 'Git',
    color: 'text-[#f1502f]',
  },

  {
    icon: <NestJSIcon />,
    label: 'NestJS',
  },
  {
    icon: <LinuxIcon />,
    label: 'Linux',
  },
  {
    icon: <JestIcon />,
    label: 'Jest',
  },

  {
    icon: <ExpressjsIcon />,
    label: 'ExpressJs',
  },

  {
    icon: <PythonIcon />,
    label: 'Python',
  },
  {
    icon: <LuaIcon />,
    label: 'Lua',
  },
  {
    icon: <JavaIcon />,
    label: 'Java',
  },
]

export const minorTechList: TechIcons[] = [
  {
    icon: <SassIcon />,
    label: 'Sass',
  },
  {
    icon: <ReactQueryIcon />,
    label: 'React Query',
  },
  {
    icon: <VitestIcon />,
    label: 'Vitest',
  },
  {
    icon: <MaterialUIIcon />,
    label: 'Material UI',
  },
  {
    icon: <SvelteIcon />,
    label: 'Svelte',
  },
  {
    icon: <TailwindCSSIcon />,
    label: 'TailwindCSS',
  },
  {
    icon: <StyledComponentsIcon />,
    label: 'Styled Components',
  },
  {
    icon: <PrettierIcon />,
    label: 'Prettier',
  },
  {
    icon: <ViteIcon />,
    label: 'Vite',
  },
  {
    icon: <DenoIcon />,
    label: 'Deno',
  },
  {
    icon: <ReactRouterIcon />,
    label: 'React Router',
  },
  {
    icon: <JQueryIcon />,
    label: 'JQuery',
  },
  {
    icon: <ChakraUIIcon />,
    label: 'Chakra UI',
  },
  {
    icon: <BunIcon />,
    label: 'Bun',
  },
]

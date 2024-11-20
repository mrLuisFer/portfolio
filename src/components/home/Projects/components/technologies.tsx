import ChakraUIIcon from '@/components/common/Icons/Chakra'
import CSSIcon from '@/components/common/Icons/Css'
import HTML5Icon from '@/components/common/Icons/Html'
import JavaScriptIcon from '@/components/common/Icons/Javascript'
import NextjsIcon from '@/components/common/Icons/NextJs'
import ReactJsIcon from '@/components/common/Icons/React'
import SassIcon from '@/components/common/Icons/Sass'
import SupabaseIcon from '@/components/common/Icons/Supabase'
import TailwindCSSIcon from '@/components/common/Icons/TailwindCss'
import TypeScriptIcon from '@/components/common/Icons/Typescript'
import { SiJira, SiSocketdotio } from 'react-icons/si'

export enum Technologies {
  chakraui = 'chakraui',
  css = 'css',
  html = 'html',
  javascript = 'javascript',
  jira = 'jira',
  next = 'next',
  react = 'react',
  sass = 'sass',
  socket = 'socket',
  supabase = 'supabase',
  tailwind = 'tailwind',
  typescript = 'typescript',
}

// TODO: change the icons from react-icons to svgs
export const icons = {
  [Technologies.chakraui]: <ChakraUIIcon />,
  [Technologies.css]: <CSSIcon />,
  [Technologies.html]: <HTML5Icon />,
  [Technologies.javascript]: <JavaScriptIcon />,
  [Technologies.jira]: <SiJira />,
  [Technologies.next]: <NextjsIcon />,
  [Technologies.react]: <ReactJsIcon />,
  [Technologies.sass]: <SassIcon />,
  [Technologies.socket]: <SiSocketdotio />,
  [Technologies.supabase]: <SupabaseIcon />,
  [Technologies.tailwind]: <TailwindCSSIcon />,
  [Technologies.typescript]: <TypeScriptIcon />,
}

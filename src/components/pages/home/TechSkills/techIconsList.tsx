import { FaReact, FaNodeJs } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit } from 'react-icons/di'
import {
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiSvelte,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

export interface TechIcons {
  icon: any
  label: string
  color: string
  id: number
}

export const techIconsList: TechIcons[] = [
  {
    icon: <FaReact />,
    label: 'React',
    color: '#61DBFB',
    id: 1,
  },
  {
    icon: <AiFillHtml5 />,
    label: 'HTML5',
    color: '#e34c26',
    id: 2,
  },
  {
    icon: <DiCss3 />,
    label: 'CSS3',
    color: '#2965f1',
    id: 3,
  },
  {
    icon: <SiTailwindcss />,
    label: 'TailwindCSS',
    color: '#67E8F9',
    id: 4,
  },
  {
    icon: <SiJavascript />,
    label: 'JavaScript',
    color: '#F0DB4F',
    id: 5,
  },
  {
    icon: <TbBrandNextjs />,
    label: 'Next.js',
    color: '#fff',
    id: 6,
  },
  {
    icon: <FaNodeJs />,
    label: 'NodeJs',
    color: '#44883e',
    id: 7,
  },
  {
    icon: <SiRedux />,
    label: 'Redux',
    color: '#764abc',
    id: 8,
  },
  {
    icon: <SiTypescript />,
    label: 'TypeScript',
    color: '#007acc',
    id: 9,
  },
  {
    icon: <SiStyledcomponents />,
    label: 'Styled Components',
    color: '',
    id: 10,
  },
  {
    icon: <DiGit />,
    label: 'Git',
    color: '#f1502f',
    id: 11,
  },
  {
    icon: <SiSvelte />,
    label: 'Svelte',
    color: '#FF3E00',
    id: 12,
  },
]

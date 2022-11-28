import { Box, Text, Tooltip } from '@chakra-ui/react'
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
import Link from 'next/link'
import Title from '../../../common/custom/Title'

interface TechIcons {
  icon: any
  label: string
  color: string
}

const techIcons: TechIcons[] = [
  {
    icon: <FaReact />,
    label: 'React',
    color: '#61DBFB',
  },
  {
    icon: <AiFillHtml5 />,
    label: 'HTML5',
    color: '#e34c26',
  },
  {
    icon: <DiCss3 />,
    label: 'CSS3',
    color: '#2965f1',
  },
  {
    icon: <SiTailwindcss />,
    label: 'TailwindCSS',
    color: '#67E8F9',
  },
  {
    icon: <SiJavascript />,
    label: 'JavaScript',
    color: '#F0DB4F',
  },
  {
    icon: <TbBrandNextjs />,
    label: 'Next.js',
    color: '#fff',
  },
  {
    icon: <FaNodeJs />,
    label: 'NodeJs',
    color: '#44883e',
  },
  {
    icon: <SiRedux />,
    label: 'Redux',
    color: '#764abc',
  },
  {
    icon: <SiTypescript />,
    label: 'TypeScript',
    color: '#007acc',
  },
  {
    icon: <SiStyledcomponents />,
    label: 'Styled Components',
    color: '',
  },
  {
    icon: <DiGit />,
    label: 'Git',
    color: '#f1502f',
  },
  {
    icon: <SiSvelte />,
    label: 'Svelte',
    color: '#FF3E00',
  },
]

export default function TechSkills() {
  return (
    <Box paddingBottom='2rem'>
      <Title colorscheme='blue' fontSize='5xl' textAlign='center' bgAnimate>
        Tech Skills
      </Title>
      <Box
        display={['grid', 'flex']}
        alignItems='center'
        justifyContent='center'
        gap='2rem'
        mt='2rem'
        flexDirection={['column', 'row']}
        gridTemplateColumns={'repeat(2, 150px)'}>
        {techIcons.map((item) => (
          <Box
            key={item.label}
            fontSize={['30px', '50px']}
            opacity='0.8'
            transition='0.15s ease'
            _hover={{ opacity: '1', color: item.color }}>
            <Tooltip hasArrow label={item.label}>
              <Box
                display={'flex'}
                alignItems='center'
                gap={3}
                justifyContent={['center', 'flex-start']}>
                <Box>{item.icon}</Box>
                <Text fontSize='lg' display={['block', 'none']}>
                  {item.label}
                </Text>
              </Box>
            </Tooltip>
          </Box>
        ))}
      </Box>
      <Link href='/projects'>
        <Text
          as='a'
          textAlign='center'
          mt={['2rem', '1rem']}
          fontSize='1rem'
          fontWeight='bold'
          opacity='0.5'
          display='block'
          color='white'
          cursor='pointer'
          _hover={{ opacity: '1' }}
          _active={{ color: 'blue.300' }}>
          and more, see more projects...
        </Text>
      </Link>
    </Box>
  )
}

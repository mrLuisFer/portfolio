import Hero from '@/components/home/Hero'
import AboutResume from '@/components/home/AboutResume'
import LikeToDo from '@/components/home/LikeToDo'
import TechSkills from '@/components/home/TechSkills'
import Projects from '@/components/home/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | mrLuisFer',
  description:
    'Welcome to my portfolio. I am a Frontend Developer with a passion for learning new technologies and building web applications.',
}

export default function Home() {
  return (
    <>
      <div className='flex h-full w-full flex-col gap-28 pb-10'>
        <Hero />
        <AboutResume />
        <LikeToDo />
        <TechSkills />
        <Projects />
      </div>
    </>
  )
}

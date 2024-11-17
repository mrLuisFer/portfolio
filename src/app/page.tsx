import Hero from '@/components/home/Hero'
import SEO from '@/components/common/SEO'
import AboutResume from '@/components/home/AboutResume'
import LikeToDo from '@/components/home/LikeToDo/LikeToDo'
import TechSkills from '@/components/home/TechSkills'
import Projects from '@/components/home/Projects'

export default function Home() {
  return (
    <>
      <SEO
        title='Portfolio | mrLuisFer'
        description='Portfolio created using react & typescript, and using styled components for the css and much more'
      />
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

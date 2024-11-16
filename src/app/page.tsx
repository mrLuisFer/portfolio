import Hero from '@/components/home/Hero'
import SEO from '@/components/common/SEO'
import AboutResume from '@/components/home/AboutResume'
import LikeToDo from '@/components/home/LikeToDo/LikeToDo'
import TechSkills from '@/components/home/TechSkills'

export default function Home() {
  return (
    <>
      <SEO
        title='Portfolio | mrLuisFer'
        description='Portfolio created using react & typescript, and using styled components for the css and much more'
      />
      <Hero />
      <AboutResume />
      <LikeToDo />
      <TechSkills />
    </>
  )
}

import Hero from 'src/components/pages/home/Hero'
import AboutResume from 'src/components/pages/home/AboutResume'
import LikeToDo from 'src/components/pages/home/LikeToDo/LikeToDo'
import { NextPage } from 'next/types'
import TechSkills from 'src/components/pages/home/TechSkills'
import SEO from 'src/components/common/SEO'
import Projects from 'src/components/pages/home/Projects'

const Home: NextPage = () => {
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
      <Projects />
    </>
  )
}

export default Home

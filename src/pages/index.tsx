import Head from 'next/head'
import Hero from 'src/components/pages/home/Hero'
import AboutResume from 'src/components/pages/home/AboutResume'
import LikeToDo from 'src/components/pages/home/LikeToDo/LikeToDo'
import { NextPage } from 'next/types'
import TechSkills from 'src/components/pages/home/TechSkills'
import SEO from 'src/components/common/SEO'

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
    </>
  )
}

export default Home

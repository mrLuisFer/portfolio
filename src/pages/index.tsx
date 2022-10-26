import Head from 'next/head'
import Hero from 'src/components/pages/home/Hero'
import AboutResume from 'src/components/pages/home/AboutResume'
import LikeToDo from 'src/components/pages/home/LikeToDo/LikeToDo'
import { NextPage } from 'next/types'
import TechSkills from 'src/components/pages/home/TechSkills'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Portfolio created using react & typescript, and using styled components for the css and much more'
        />
        <title>Portfolio | mrLuisFer</title>
      </Head>
      <Hero />
      <AboutResume />
      <LikeToDo />
      <TechSkills />
    </>
  )
}

export default Home

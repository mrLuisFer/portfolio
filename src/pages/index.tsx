import Head from 'next/head'
import Hero from 'src/components/home/Hero'
import AboutResume from 'src/components/home/AboutResume'
import LikeToDo from 'src/components/LikeToDo/LikeToDo'
import ListWorksSkills from 'src/components/ListWorksSkills/ListWorksSkills'
import { NextPage } from 'next/types'

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
      <ListWorksSkills />
    </>
  )
}

export default Home

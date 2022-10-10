import Head from 'next/head'
import Hero from 'src/components/Hero/Hero'
import AboutResume from 'src/components/AboutResume/AboutResume'
import LikeToDo from 'src/components/LikeToDo/LikeToDo'
import ListWorksSkills from 'src/components/ListWorksSkills/ListWorksSkills'
import { NextPage } from 'next/types'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.svg' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='keywords'
          content='Porfolio React Portfolio React and Typescript Website Frontend JavaScript mrLuisFer Luis Alvarez Github'
        />
        <meta
          name='description'
          content='Portfolio created using react & typescript, and using styled components for the css and much more'
        />
        <meta name='author' content='mrLuisFer' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/favicon.svg' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&family=Open+Sans:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
        <link
          href='//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css'
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

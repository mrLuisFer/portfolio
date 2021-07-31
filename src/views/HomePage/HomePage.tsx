// components
import Hero from 'src/components/Hero/Hero'
import AboutResume from 'src/components/AboutResume/AboutResume'
import LikeToDo from 'src/components/LikeToDo/LikeToDo'
import ListWorksSkills from 'src/components/ListWorksSkills/ListWorksSkills'

function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <AboutResume />
      <LikeToDo />
      <ListWorksSkills />
    </>
  )
}

export default HomePage

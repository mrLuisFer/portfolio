// components
import Hero from '../components/Hero/Hero'
import AboutResume from '../components/AboutResume/AboutResume'
import LikeToDo from '../components/LikeToDo/LikeToDo'
import ListWorksSkills from '../components/ListWorksSkills/ListWorksSkills'

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

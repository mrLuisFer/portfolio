// components
import Hero from "../components/Hero"
import AboutResume from "../components/AboutResume"
import LikeToDo from "../components/LikeToDo"
import ListWorksSkills from "../components/ListWorksSkills"

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

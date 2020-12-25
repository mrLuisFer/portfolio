import React from "react"
// components
import Hero from "../components/Hero"
import AboutResume from "../components/AboutResume"
import LikeToDo from "../components/LikeToDo"
import ListWorksSkills from "../components/ListWorksSkills"
// Hooks
import { useLoader } from "../hooks/useLoader"

function HomePage(): JSX.Element {
  const loader: Boolean = useLoader(500)

  return (
    <>
      {loader ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <Hero />
          <AboutResume />
          <LikeToDo />
          <ListWorksSkills />
        </>
      )}
    </>
  )
}

export default HomePage

import React from "react"
// components
import Hero from "../components/Hero"
import AboutResume from "../components/AboutResume"
import LikeToDo from "../components/LikeToDo"
import Skiils from "../components/Skiils"

function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <AboutResume />
      <LikeToDo />
      <Skiils />
    </>
  )
}

export default HomePage

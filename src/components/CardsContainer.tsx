import React from "react"

// React Router
import { Switch, Route } from "react-router-dom"

// Custom Hooks
import { useLoader } from "../hooks/useLoader"

// Components
import Skills from "./Skills"
import Projects from "./Projects"
import Services from "./Services"

export default function CardsContainer(): JSX.Element {
  const loader = useLoader()

  return (
    <div className="Cards-container">
      <Switch>
        <Route exact path="/">
          <Skills />
        </Route>
        <Route path="/portfolio/skills/">
          {loader ? <div className="loader">Loading...</div> : <Skills />}
        </Route>
        <Route path="/portfolio/projects/">
          <Projects />
        </Route>
        <Route path="/portfolio/services/">
          {loader ? <div className="loader">Loading...</div> : <Services />}
        </Route>
      </Switch>
    </div>
  )
}

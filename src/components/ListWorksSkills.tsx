import React from "react"
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom"
// Components
import Skills from "./Skills"
import Projects from "./Projects"
import { useLoader } from "../hooks/loader"

export default function ListWorksSkills(): JSX.Element {
  const loader = useLoader()

  return (
    <Router>
      <div className="ListWorksSkills">
        {/* It is inside a div for in case it is necessary to put a background with an illustration */}
        <div className="LisWorksSkills__div">
          <h2 className="ListWorksSkills__title">
            My <span>Portfolio</span>
          </h2>
          <div className="ListWorksSkills__links">
            <NavLink
              activeClassName="ListWorksSkills__link-active"
              to="/portfolio/skills"
            >
              <i className="fas fa-angle-right"></i> <span>Skills </span>
            </NavLink>
            <NavLink
              activeClassName="ListWorksSkills__link-active"
              to="/portfolio/projects"
            >
              <i className="fas fa-angle-right"></i> <span>Projects</span>
            </NavLink>
            <NavLink
              activeClassName="ListWorksSkills__link-active"
              to="/portfolio/what-i-do"
            >
              <i className="fas fa-angle-right"></i> <span>What I do?</span>
            </NavLink>
          </div>

          {/* Routes to navigate in the list of skills, projects and what I do */}
          <div className="Cards-container">
            <Switch>
              <Route exact path="/">
                <Skills />
              </Route>
              <Route exact path="/portfolio/skills">
                {loader ? <div className="loader">Loading...</div> : <Skills />}
              </Route>
              <Route exact path="/portfolio/projects">
                <Projects />
              </Route>
              <Route exact path="/portfolio/what-i-do">
                {loader ? <div className="loader">Loading...</div> : ""}
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

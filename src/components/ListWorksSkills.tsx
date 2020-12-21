import React from "react"
// React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// Components
import Skiils from "../components/Skiils"

export default function ListWorksSkills(): JSX.Element {
  return (
    <Router>
      <div className="ListWorksSkills">
        {/* It is inside a div for in case it is necessary to put a background with an illustration */}
        <div className="LisWorksSkills__div">
          <h2 className="ListWorksSkills__title">
            My <span>Portfolio</span>
          </h2>
          <div className="ListWorksSkills__links">
            <Link to="/">
              <i className="fas fa-angle-right"></i> <span>Skills </span>
            </Link>
            <Link to="/portfolio/projects">
              <i className="fas fa-angle-right"></i> <span>Projects</span>
            </Link>
            <Link to="/portfolio/what-i-do">
              <i className="fas fa-angle-right"></i> <span>What I do?</span>
            </Link>
          </div>

          {/* Routes to navigate in the list of skills, projects and what I do */}
          <Switch>
            <Route exact path="/">
              <Skiils />
            </Route>
            <Route path="/portfolio/projects"></Route>
            <Route path="/portfolio/what-i-do"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

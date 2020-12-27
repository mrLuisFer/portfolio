import React from "react"
// React Router
import { BrowserRouter as Router, Link } from "react-router-dom"
// Components
import CardsContainer from "../components/CardsContainer"

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
            <Link to="/portfolio/skills/">
              <i className="fas fa-angle-right"></i> <span>Skills </span>
            </Link>
            <Link to="/portfolio/projects/">
              <i className="fas fa-angle-right"></i> <span>Projects</span>
            </Link>
            <Link to="/portfolio/services/">
              <i className="fas fa-angle-right"></i> <span>What I do?</span>
            </Link>
          </div>

          {/* Routes to navigate in the list of skills, projects and what I do */}
          <CardsContainer />
        </div>
      </div>
    </Router>
  )
}

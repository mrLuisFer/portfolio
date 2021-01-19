import React from "react"
// React Router
import { BrowserRouter as Router, Link } from "react-router-dom"
// Components
import CardsContainer from "../components/CardsContainer"

export default function ListWorksSkills(): JSX.Element {
  return (
    <Router>
      <div id="portfolio" className="ListWorksSkills">
        {/* It is inside a div for in case it is necessary to put a background with an illustration */}
        <div className="LisWorksSkills__div">
          <h2 className="ListWorksSkills__title">
            My <span>Portfolio</span>
          </h2>
          {/* Routes to navigate in the list of skills, projects and what I do */}
          <CardsContainer />
        </div>
      </div>
    </Router>
  )
}

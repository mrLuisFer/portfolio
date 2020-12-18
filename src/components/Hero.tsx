import React from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"
// Assets
import heroIllustration from "../assets/hero-illustration.svg"

export default function Hero(): JSX.Element {
  return (
    <Router>
      <div className="Hero">
        <img
          className="Hero__illustration"
          src={heroIllustration}
          alt="hero-illustration"
        />
        <div className="Hero__flex">
          <div className="Hero__personal">
            <h2 className="Hero__personal-title">
              <span className="Hero__personal-greet">Hello!</span>
              I'm <span className="Hero__personal-name">Luis Alvarez</span>
              <span>
                <i className="fas fa-code Hero__personal-codeIcon"></i>
              </span>
            </h2>
            <h5 className="Hero__personal-info">
              <span>
                Frontend <span>Developer</span>
              </span>
              , specialized in
              <span id="Hero__personal-info-js"> Javascript</span> &{" "}
              <span>
                <span>React</span>
              </span>{" "}
              for UI
            </h5>
          </div>
          <div className="Hero__links">
            <a
              className="Hero__links-linkedin"
              href="https://www.linkedin.com/in/luis-fernando-alvarez/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="Hero__links-github"
              href="https://github.com/mrLuisFer"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <Link to="/">
              <i className="fas fa-user"></i> More About Me
            </Link>
          </div>
        </div>
      </div>
    </Router>
  )
}

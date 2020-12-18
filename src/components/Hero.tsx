import React from "react"
import heroPattern from "../assets/hero-pattern.png"

export default function Hero(): JSX.Element {
  return (
    <div className="Hero">
      <img src={heroPattern} alt="hero-pattern" />
      <div className="Hero__personal">
        <h2 className="Hero__personal-title">
          Hi!, I'm <span>Luis Alvarez</span>
          <span>
            <i className="fas fa-grip-lines-vertical"></i>
          </span>
        </h2>
        <h5 className="Hero__personal-info">
          I'm a Frontend Developer, specialized in <span>Javascript</span>{" "}
          language and using <span>React</span> for user interfaces
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
      </div>
    </div>
  )
}

import React, { useState } from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"

export default function NavBar() {
  const [showIcons, setShowIcons] = useState(false)

  const div = document.querySelector(".NavBar__social-media-container-icons")

  const handleShowIcons = (): void => {
    setShowIcons(!showIcons)
  }

  return (
    <Router>
      <div className="NavBar">
        <div className="NavBar__logo">
          <span className="NavBar__logo-title">mrLuisFer</span>
        </div>
        <div className="NavBar__links">
          <Link to="/">Contact me</Link>
          <Link to="/">About me</Link>
          <div className="NavBar__social-media">
            <span
              className="NavBar__social-media__span"
              onClick={handleShowIcons}
            >
              Social Media
            </span>
            {showIcons ? (
              <div className="NavBar__social-media-icons">
                <div className="NavBar__social-media-container-icons">
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Router>
  )
}

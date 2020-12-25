import React, { useState } from "react"
import { Link } from "react-router-dom"

// Assets
import doubleArrowRight from "../assets/double-arrow-right.svg"

export default function NavBar(): JSX.Element {
  const [showIcons, setShowIcons] = useState(false)

  const handleShowIcons = (): void => {
    setShowIcons(!showIcons)
  }

  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <h1 className="NavBar__logo-title animate__animated animate__bounceIn animate__fast">
          <Link to="/">mrLuisFer</Link>
        </h1>
      </div>
      <div className="NavBar__links">
        <Link to="/contact-me">Contact me</Link>
        <Link to="/about-me">About me</Link>
        <div className="NavBar__social-media">
          <span
            className={
              showIcons
                ? "NavBar__social-media__span"
                : "NavBar__social-media__span NavBar__notShowIcons-rounded"
            }
            onClick={handleShowIcons}
          >
            <img
              src={doubleArrowRight}
              alt="double-arrow-right"
              className={showIcons ? "" : "NavBar__img-volted"}
            />
            Social Media
            {showIcons ? ":" : ""}
          </span>

          {showIcons ? (
            <div className="NavBar__social-media-icons">
              <div className="NavBar__social-media-icons-anchors animate__animated animate__zoomIn animate__faster">
                <a
                  href="https://www.facebook.com/profile.php?id=100013068189807"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/lolesuncrak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-fernando-alvarez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="mailto:lolesuncrak@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-paper-plane"></i>
                </a>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

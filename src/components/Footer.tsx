import React from "react"
// Assets
import footerWave from "../assets/footer-wave.svg"
import footerIllustration from "../assets/footer-illustration.svg"

export default function Footer() {
  return (
    <div className="Footer">
      <img className="Footer__wave" src={footerWave} alt="footer-wave" />
      <div className="Footer__container">
        <div className="Footer__container-card">
          <h2>Quick Links</h2>
          <div>
            <a href="/#hero">Header</a>
            <a href="/#about">About Me</a>
            <a href="/#portfolio">My Portfolio</a>
            <a
              href="mailto:lolesuncrak@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Me a Email
            </a>{" "}
          </div>
        </div>
        <div className="Footer__container-card">
          <h2>Social Media</h2>
          <div>
            <a
              href="https://www.linkedin.com/in/mrLuisFer/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/lolesuncrak"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/mrLuisFer/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100013068189807"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mrluisfer_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        {/* Footer Illustration */}
        <img
          className="Footer__container-illustration"
          src={footerIllustration}
          alt="footer-illustration"
        />
      </div>
    </div>
  )
}

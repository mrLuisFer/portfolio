import React from "react"
// Assets
import footerIllustration from "../assets/footer-illustration.svg"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        {/* Quick Links */}
        <div className="Footer__container-card">
          <h2>Quick Links</h2>
          <div>
            <a href="/#hero">
              <span>Header</span>
            </a>
            <a href="/#about">
              <span>About Me</span>
            </a>
            <a href="/#portfolio">
              <span>My Portfolio</span>
            </a>
            <a
              href="mailto:lolesuncrak@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-at"></i>
              <span>Send a Email</span>
            </a>{" "}
          </div>
        </div>
        {/* Social Media */}
        <div className="Footer__container-card">
          <h2>Social Media</h2>
          <div>
            <a
              href="https://www.linkedin.com/in/mrLuisFer/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/lolesuncrak"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/mrLuisFer/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
              <span>Github</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100013068189807"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/mrluisfer_/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
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

      <span className="Footer__made">
        Made with <i className="fas fa-heart"></i> by{" "}
        <a
          href="https://github.com/mrLuisFer/"
          target="_blank"
          rel="noreferrer"
        >
          mrLuisFer
        </a>
      </span>
    </div>
  )
}

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
            <a href="/#hero">Home</a>
            <a href="/#about">About Me</a>
            <a href="/#portfolio">My Portfolio</a>
          </div>
        </div>
        <div className="Footer__container-card">
          <h2>Social Media</h2>
          <div>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Github</a>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
          </div>
        </div>
        <div>
          <h2>Let's talk about everything!</h2>
        </div>
        <img
          className="Footer__container-illustration"
          src={footerIllustration}
          alt="footer-illustration"
        />
      </div>
    </div>
  )
}

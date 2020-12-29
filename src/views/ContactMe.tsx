import React from "react"
// Assets
import contactMeIllustration from "../assets/contactMe/code-typing-contactme.svg"
// Components
import ContactForm from "../components/ContactForm"

export default function ContactMe() {
  return (
    <div className="ContactMe">
      <h1 className="ContactMe__title">Contact Me</h1>
      <div className="ContactMe__container">
        <div className="ContactMe__container-social">
          <h4 className="ContactMe__container-social__title">Follow Me:</h4>
          <a href="/">
            {/* Icon */}
            <i className="fab fa-github"></i>
            {/* Name Of the icon (span) */}
            <span>GitHub</span>
          </a>
          <a href="/">
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
          <a href="/">
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div>
        <img
          className="ContactMe__container-social__illustration"
          src={contactMeIllustration}
          alt="code-typing-contactme"
        />
      </div>
      <div className="ContactMe__flex">
        <ContactForm />
      </div>
    </div>
  )
}

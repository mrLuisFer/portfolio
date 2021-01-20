import React, { useState } from "react"
// Functions
import { sendEmail } from "../functions/emailJs"
// Components
import StatusText from "./StatusText"

// This is the contact component with all logic
export default function ContactForm() {
  const [hasEmail, setHasEmail] = useState<Boolean>(false)
  const [hasInfo, setHasInfo] = useState<Boolean>(false)
  const [error, setError] = useState<String>("")
  const [statusError, setStatusError] = useState<Boolean>(false)
  const [showText, setShowText] = useState<Boolean>(false)

  const validateToSendEmail = (e: any): void => {
    e.preventDefault()

    // Input Values
    const name: string = e.target[0].value
    const email: string = e.target[1].value
    const message: string = e.target[2].value

    if (name.length > 5 && email.length > 5 && message.length > 10) {
      const res: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const testingEmail: boolean = res.test(email)
      if (testingEmail) {
        setHasEmail(true)
        setHasInfo(true)
        setStatusError(false)
        setShowText(true)
      } else {
        setError("Please enter a valid email")
        setStatusError(true)
        setShowText(true)
      }
    } else {
      setError("Please put a valid message/name")
      setShowText(true)
      setStatusError(true)
    }

    //// Function
    if (hasEmail && hasInfo) {
      sendEmail(e)
    }
  }

  return (
    <div className="ContactForm">
      <h2>
        <i className="far fa-comments"></i>
        Leave me a message
      </h2>
      {/* Contact Form */}
      <form onSubmit={(e) => validateToSendEmail(e)}>
        <div>
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Name..."
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="emal"
            name="email"
            id="email"
            placeholder="some@email.com"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={7}
            cols={40}
            placeholder="Some message..."
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button type="submit" className="ContactForm__submit">
          <i className="far fa-envelope"></i>Send Email
        </button>
      </form>
      {showText ? (
        <StatusText
          error={error}
          statusError={statusError}
          setShowText={setShowText}
        />
      ) : (
        ""
      )}
    </div>
  )
}

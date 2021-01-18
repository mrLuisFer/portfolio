import React, { useState } from "react"
import { sendEmail } from "../functions/emailJs"

type Error = {
  status: boolean
  text: string
}
// This is the contact component with all logic
export default function ContactForm() {
  const [hasEmail, setHasEmail] = useState<Boolean>(false)
  const [hasInfo, setHasInfo] = useState<Boolean>(false)
  const [error, setError] = useState<Error>({
    status: false,
    text: "",
  })

  const validateToSendEmail = (e: any): void => {
    e.preventDefault()

    // Input Values
    const name: string = e.target[0].value
    const email: string = e.target[1].value
    const message: string = e.target[2].value

    if (name.length > 0 && email.length > 0 && message.length > 10) {
      const res: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const testingEmail: boolean = res.test(email)
      if (testingEmail) {
        setHasEmail(true)
        setHasInfo(true)
        const error = {
          status: false,
          text: "",
        }
        setError(error)
      } else {
        console.log("El email es incorrecto")
        const error = {
          status: true,
          text: "Please enter a valid email",
        }
        setError(error)
      }
    } else {
      console.log("Colocar un mensaje correcto")
      const error = {
        status: true,
        text: "Please put a valid message",
      }
      setError(error)
    }

    //// Function
    if (hasEmail && hasInfo) {
      // sendEmail(e)
      console.log(e)
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
            placeholder="My message..."
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button type="submit" className="ContactForm__submit">
          <i className="far fa-envelope"></i>Send Email
        </button>
      </form>
      {error.status ? <p>{error.text}</p> : ""}
    </div>
  )
}

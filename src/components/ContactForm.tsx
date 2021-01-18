import React, { useState } from "react"
import { sendEmail } from "../functions/emailJs"

// This is the contact component with all logic
export default function ContactForm() {
  const [hasInfo, setHasInfo] = useState<Boolean>(false)

  const validateToSendEmail = (e: any) => {
    e.preventDefault()

    // Input Values
    const name: string = e.target[0].value
    const email: string = e.target[1].value
    const message: string = e.target[2].value

    // const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (name.length > 0 && email.length > 0 && message.length > 0) {
      const res: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const testingEmail = res.test(email)
      console.log(testingEmail)
      // setHasInfo(true)
    }

    //// Function
    if (hasInfo) {
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
            placeholder="My message..."
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button type="submit" className="ContactForm__submit">
          <i className="far fa-envelope"></i>Send Email
        </button>
      </form>
    </div>
  )
}

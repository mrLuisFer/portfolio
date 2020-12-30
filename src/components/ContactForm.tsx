import React from "react"
import { sendEmail } from "../hooks/emailJs"

// This is the contact component with all logic
export default function ContactForm() {
  return (
    <div className="ContactForm">
      <h2>
        <i className="far fa-comments"></i>
        Leave me a message
      </h2>
      {/* Contact Form */}
      <form method="post" onSubmit={sendEmail}>
        <div>
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            autoFocus
            required
            placeholder="Name..."
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="emal"
            name="email"
            id="email"
            required
            placeholder="some@email.com"
            autoComplete="off"
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

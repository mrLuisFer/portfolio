import React from "react"
import { sendEmail } from "../hooks/emailJs"

// This is the contact component with all logic
export default function ContactForm() {
  return (
    <div className="ContactForm">
      <h2>Leave me a message</h2>
      {/* Contact Form */}
      <form method="post" onSubmit={sendEmail}>
        <input type="text" name="from_name" />
        <input type="emal" name="email" />
        <input type="text" name="message" />
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

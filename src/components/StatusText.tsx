import React from "react"

type TStatusText = {
  error: String
  statusError: boolean
}

export default function StatusText({ error, statusError }: TStatusText) {
  return (
    <div className="StatusText">
      <p
        className={
          (statusError ? "ContactForm__text-status-error " : "") +
          " ContactForm__text-status"
        }
      >
        <i className="fas fa-exclamation-triangle"></i>
        {error}
      </p>
    </div>
  )
}

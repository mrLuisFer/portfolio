import React, { useEffect, useCallback } from "react"

type TStatusText = {
  error: String
  statusError: Boolean
  setShowText: Function
}

export default function StatusText({
  error,
  statusError,
  setShowText,
}: TStatusText) {
  const succesText: string = "Message sent successfully! :D"
  const succesIcon: string = "fas fa-check-square"

  const changinShowText = useCallback(() => {
    setShowText(false)
  }, [setShowText])

  useEffect(() => {
    setTimeout(() => {
      changinShowText()
    }, 3000)
  }, [changinShowText])

  return (
    <div className="StatusText">
      <p className="ContactForm__text-status">
        <span
          className={
            statusError
              ? "ContactForm__text-status-error "
              : "ContactForm__text-status-succes"
          }
        >
          <i
            className={statusError ? "fas fa-exclamation-triangle" : succesIcon}
          ></i>
          {statusError ? error : succesText}
        </span>
      </p>
    </div>
  )
}

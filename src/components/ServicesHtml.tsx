import React, { useState } from "react"

type TServicesHtml = {
  iconClass: string
  title: string
  description: string
}

export default function ServicesHtml({
  iconClass,
  title,
  description,
}: TServicesHtml) {
  const [showText, setShowText] = useState<Boolean>(false)

  const handleShowText = (): void => {
    // checks if the text exists so as not to break the style of the box
    const hasDescription: number = 40
    if (description.length >= hasDescription) {
      setShowText(!showText)
    }
  }

  return (
    <>
      {/* Card */}
      <div className="Services__container-card">
        {/* Icon (ClassName)*/}
        <i
          id="card-icon"
          className={iconClass + " Services__container-card-icon"}
        ></i>
        <div>
          {/* Title */}
          <h1 onClick={handleShowText}>
            <span
              className={showText ? "Services__toVolted" : "Services__toVolt"}
            >
              <i className="fas fa-caret-right"></i>
            </span>
            {title}
          </h1>
          {/* Text (Description)*/}
          <p
            className={
              showText
                ? "Services__showed animate__animated animate__fadeIn"
                : "Services__toShow"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </>
  )
}

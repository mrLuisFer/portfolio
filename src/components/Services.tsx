import React, { useState } from "react"

export default function Services(): JSX.Element {
  const [showText, setShowText] = useState<Boolean>(false)

  const handleShowText = () => {
    setShowText(!showText)
  }

  return (
    <div className="Services">
      <h2 className="Services__title">
        <i className="fas fa-angle-double-right"></i>
        My <span>Services:</span>
      </h2>
      <div className="Services__container">
        {/* Card */}
        <div className="Services__container-card">
          {/* Icon */}
          <i className="fas fa-laptop-code Services__container-card-icon"></i>
          <div>
            {/* Title */}
            <h1 onClick={handleShowText}>
              <span
                className={showText ? "Services__toVolted" : "Services__toVolt"}
              >
                <i className="fas fa-caret-right"></i>
              </span>
              Web Development
            </h1>
            {/* Text */}
            <p
              className={
                showText
                  ? "Services__showed animate__animated animate__fadeIn"
                  : "Services__toShow"
              }
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque,
              eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              voluptate facere doloribus adipisci, illum qui saepe.
            </p>
          </div>
        </div>
      </div>

      {/* Cards of 'Specializing in' */}

      <div>
        <div>
          {/* Title */}
          {/* Text */}
        </div>
      </div>
    </div>
  )
}

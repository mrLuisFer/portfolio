import React from "react"
// Components
import ServicesHtml from "./ServicesHtml"

export default function Services(): JSX.Element {
  return (
    <>
      <div className="Services">
        <h2 className="Services__title">
          <i className="fas fa-angle-double-right"></i>
          My <span>Services:</span>
        </h2>
        <div className="Services__container">
          <ServicesHtml
            title="Web Development"
            iconClass="fas fa-laptop-code"
            description=""
          />
        </div>
      </div>
      {/* Cards of 'Specializing in' */}
      <div>
        <div>
          {/* Title */}
          {/* Text */}
        </div>
      </div>
    </>
  )
}

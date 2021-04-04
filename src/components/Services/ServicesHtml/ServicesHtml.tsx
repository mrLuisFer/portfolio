import { useState } from 'react'
// Utils
import { fadeIn } from '../../../utils/animateCss/animateCss'

type TServicesHtml = {
  iconClass: string
  title: string
  description?: string
  linkReference?: string
}

export default function ServicesHtml({
  iconClass,
  title,
  description = '',
  linkReference = '',
}: TServicesHtml) {
  const [showText, setShowText] = useState<Boolean>(false)
  const [showLinkReference, setShowLinkReference] = useState<Boolean>(true)

  const handleShowText = (): void => {
    // checks if the text exists so as not to break the style of the box
    const hasDescription: number = 20
    if (description.length >= hasDescription) {
      setShowText(!showText)
    }

    if (linkReference.length <= 1 || linkReference === undefined) {
      setShowLinkReference(false)
    }
  }

  return (
    <>
      {/* Card */}
      <div className='Services__container-card'>
        {/* Icon (ClassName) */}
        <span
          className='Services__container-card-icon'
          onClick={handleShowText}
          aria-hidden='true'>
          <i id='card-icon' className={iconClass} />
        </span>
        <div>
          {/* Title */}
          <h1 onClick={handleShowText} aria-hidden='true'>
            <span className={showText ? 'Services__toVolted' : 'Services__toVolt'}>
              <i className='fas fa-caret-right' />
            </span>
            {title}
          </h1>
          {/* Text (Description) */}
          <div className={showText ? `Services__showed ${fadeIn}` : 'Services__toShow'}>
            <p>{description}</p>

            {showLinkReference ? (
              <a href={linkReference} target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-link' />
                <span>What is this?</span>
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

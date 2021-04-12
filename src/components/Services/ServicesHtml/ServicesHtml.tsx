import { useState } from 'react'
// Utils
import { fadeIn } from '../../../utils/animateCss/animateCss'
import {
  ServicesHtmlCard,
  ServicesHtmlCardContent,
  ServicesHtmlCardContentText,
  ServicesHtmlCardContentTitle,
  ServicesHtmlCardIcon,
} from './ServicesHtml.styles'

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
      <ServicesHtmlCard>
        {/* Icon (ClassName) */}
        <ServicesHtmlCardIcon onClick={handleShowText} aria-hidden='true'>
          <i id='card-icon' className={iconClass} />
        </ServicesHtmlCardIcon>
        <ServicesHtmlCardContent>
          {/* Title */}
          <ServicesHtmlCardContentTitle onClick={handleShowText} aria-hidden='true'>
            <span className={showText ? 'Services__toVolted' : 'Services__toVolt'}>
              <i className='fas fa-caret-right' />
            </span>
            {title}
          </ServicesHtmlCardContentTitle>
          {/* Text (Description) */}
          <div className={showText ? `Services__showed ${fadeIn}` : 'Services__toShow'}>
            <ServicesHtmlCardContentText>{description}</ServicesHtmlCardContentText>

            {showLinkReference ? (
              <a href={linkReference} target='_blank' rel='noopener noreferrer'>
                <i className='fas fa-link' />
                <span>What is this?</span>
              </a>
            ) : (
              ''
            )}
          </div>
        </ServicesHtmlCardContent>
      </ServicesHtmlCard>
    </>
  )
}

import { useState } from 'react'
// Utils
import { fadeIn } from '../../../utils/animateCss/animateCss'
import '../../../styles/rotate.css'
import {
  LinkReference,
  ServicesHtmlCard,
  ServicesHtmlCardContent,
  ServicesHtmlCardContentContainer,
  ServicesHtmlCardContentText,
  ServicesHtmlCardContentTitle,
  ServicesHtmlCardContentTitleIcon,
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
}: TServicesHtml): JSX.Element {
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
      <ServicesHtmlCard showText={showText}>
        {/* Icon (ClassName) */}
        <ServicesHtmlCardIcon onClick={handleShowText} aria-hidden='true'>
          <i id='card-icon' className={iconClass} />
        </ServicesHtmlCardIcon>
        <ServicesHtmlCardContent>
          {/* Title */}
          <ServicesHtmlCardContentTitle onClick={handleShowText} aria-hidden='true'>
            <ServicesHtmlCardContentTitleIcon toVolt={showText}>
              <i className='fas fa-caret-right' />
            </ServicesHtmlCardContentTitleIcon>
            {title}
          </ServicesHtmlCardContentTitle>
          {/* Text (Description) */}
          <ServicesHtmlCardContentContainer className={fadeIn} isShow={showText}>
            <ServicesHtmlCardContentText>{description}</ServicesHtmlCardContentText>

            {showLinkReference ? (
              <LinkReference
                href={linkReference}
                target='_blank'
                rel='noopener noreferrer'>
                <i className='fas fa-link' />
                <span>What is this?</span>
              </LinkReference>
            ) : (
              ''
            )}
          </ServicesHtmlCardContentContainer>
        </ServicesHtmlCardContent>
      </ServicesHtmlCard>
    </>
  )
}

import { useEffect, useCallback } from 'react'
import {
  StatusTextDescription,
  StatusTextDescriptionIcon,
  StatusTextSpan,
  StatusTextStyled,
} from './StatusText.styles'

type TStatusText = {
  error: String
  statusError: Boolean
  setShowText: Function
}

export default function StatusText({ error, statusError, setShowText }: TStatusText) {
  const succesText: string = 'Message sent successfully! :D'
  const succesIcon: string = 'fas fa-check-square'

  const changinShowText = useCallback(() => {
    setShowText(false)
  }, [setShowText])

  useEffect(() => {
    setTimeout(() => {
      changinShowText()
    }, 3000)
  }, [changinShowText])

  return (
    <StatusTextStyled>
      <StatusTextDescription>
        <StatusTextSpan statusError={statusError}>
          <StatusTextDescriptionIcon
            className={statusError ? 'fas fa-exclamation-triangle' : succesIcon}
          />
          {statusError ? error : succesText}
        </StatusTextSpan>
      </StatusTextDescription>
    </StatusTextStyled>
  )
}

import { useState } from 'react'
// Functions
import sendEmail from 'src/functions/emailJs'
// Components
import StatusText from '../StatusText/StatusText'

import {
  ContactFormContent,
  ContactFormLabel,
  ContactFormStyled,
  ContactFormTitle,
  ContactFormTitleIcon,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormBtnSubmit,
  ContactFormBtnSubmitIcon,
} from './ContactForm.styles'

// This is the contact component with all logic
export default function ContactForm(): JSX.Element {
  const [hasEmail, setHasEmail] = useState<Boolean>(false)
  const [hasInfo, setHasInfo] = useState<Boolean>(false)
  const [error, setError] = useState<String>('')
  const [statusError, setStatusError] = useState<Boolean>(false)
  const [showText, setShowText] = useState<Boolean>(false)

  const validateToSendEmail = (e: any): void => {
    e.preventDefault()

    // Input Values
    const name: string = e.target[0].value
    const email: string = e.target[1].value
    const message: string = e.target[2].value

    if (name.length > 5 && email.length > 5 && message.length > 10) {
      const res: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const testingEmail: boolean = res.test(email)
      if (testingEmail) {
        setHasEmail(true)
        setHasInfo(true)
        setStatusError(false)
        setShowText(true)
      } else {
        setError('Please enter a valid email')
        setStatusError(true)
        setShowText(true)
      }
    } else {
      setError('Please put a valid message/name')
      setShowText(true)
      setStatusError(true)
    }

    /// Function
    if (hasEmail && hasInfo) {
      sendEmail(e)
    }
  }

  return (
    <ContactFormStyled>
      <ContactFormTitle>
        <ContactFormTitleIcon className='far fa-comments' />
        Leave me a message
      </ContactFormTitle>
      {/* Contact Form */}
      <form onSubmit={(e) => validateToSendEmail(e)}>
        <ContactFormContent>
          <ContactFormLabel htmlFor='from_name'>
            Name:
            <ContactFormInput
              type='text'
              name='from_name'
              id='from_name'
              placeholder='Name...'
              autoComplete='off'
              required
            />
          </ContactFormLabel>
        </ContactFormContent>
        <ContactFormContent>
          <ContactFormLabel htmlFor='email'>
            Email:
            <ContactFormInput
              type='emal'
              name='email'
              id='email'
              placeholder='some@email.com'
              autoComplete='off'
              required
            />
          </ContactFormLabel>
        </ContactFormContent>
        <ContactFormContent>
          <ContactFormLabel htmlFor='message'>
            Message:
            <ContactFormTextarea
              id='message'
              name='message'
              rows={7}
              cols={40}
              placeholder='Some message...'
              autoComplete='off'
              required
            />
          </ContactFormLabel>
        </ContactFormContent>
        <ContactFormBtnSubmit type='submit'>
          <ContactFormBtnSubmitIcon className='far fa-envelope' />
          Send Email
        </ContactFormBtnSubmit>
      </form>
      {showText ? (
        <StatusText error={error} statusError={statusError} setShowText={setShowText} />
      ) : (
        ''
      )}
    </ContactFormStyled>
  )
}

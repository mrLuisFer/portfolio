// Components
import ContactForm from 'src/components/ContactForm/ContactForm'
// Utils
import { slideUp } from 'src/utils/animateCss/animateCss'
import {
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
} from 'src/utils/social-links/socialLinks'

import {
  ContactMeContainer,
  ContactMeSocialContainer,
  ContactMeSocialLink,
  ContactMeSocialContainerTitle,
  ContactMeStyled,
  ContactMeTitle,
  ContactMeSocialIcon,
  ContactMeSocialText,
  ContactMeIllustration,
  ContactMeFlex,
} from 'src/styles/components/ContactMe.styles'

export default function ContactMe() {
  return (
    <ContactMeStyled>
      <ContactMeTitle>Contact Me</ContactMeTitle>
      <ContactMeContainer>
        <ContactMeSocialContainer className={slideUp}>
          <ContactMeSocialContainerTitle>
            You can contact me by..
          </ContactMeSocialContainerTitle>
          <ContactMeSocialLink href={github} target='_blank' rel='noopener noreferrer'>
            <ContactMeSocialIcon className='fab fa-github' />
            <ContactMeSocialText>GitHub</ContactMeSocialText>
          </ContactMeSocialLink>
          <ContactMeSocialLink href={linkedin} target='_blank' rel='noopener noreferrer'>
            <ContactMeSocialIcon className='fab fa-linkedin' />
            <ContactMeSocialText>LinkedIn</ContactMeSocialText>
          </ContactMeSocialLink>
          <ContactMeSocialLink href={twitter} target='_blank' rel='noopener noreferrer'>
            <ContactMeSocialIcon className='fab fa-twitter' />
            <ContactMeSocialText>Twitter</ContactMeSocialText>
          </ContactMeSocialLink>
          <ContactMeSocialLink href={facebook} target='_blank' rel='noopener noreferrer'>
            <ContactMeSocialIcon className='fab fa-facebook' />
            <ContactMeSocialText>Facebook</ContactMeSocialText>
          </ContactMeSocialLink>
          <ContactMeSocialLink href={instagram} target='_blank' rel='noopener noreferrer'>
            <ContactMeSocialIcon className='fab fa-instagram' />
            <ContactMeSocialText>Instagram</ContactMeSocialText>
          </ContactMeSocialLink>
        </ContactMeSocialContainer>
        <ContactMeIllustration
          src='assets/contactMe/code-typing-contactme.svg'
          alt='Illustration of person developing a web page'
        />
      </ContactMeContainer>
      <ContactMeFlex>
        <ContactMeIllustration
          src='assets/contactMe/contactMe-mail-sent.svg'
          alt='Illustration where an email is sent'
        />
        <ContactForm />
      </ContactMeFlex>
    </ContactMeStyled>
  )
}

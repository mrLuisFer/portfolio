// Assets
import contactMeIllustration from '../assets/contactMe/code-typing-contactme.svg'
import contactMeMailSent from '../assets/contactMe/contactMe-mail-sent.svg'
// Components
import ContactForm from '../components/ContactForm/ContactForm'
// Utils
import { slideUp } from '../utils/animateCss/animateCss'
import {
  facebook,
  github,
  instagram,
  linkedin,
  twitter,
} from '../utils/social-links/socialLinks'

export default function ContactMe() {
  return (
    <div className='ContactMe'>
      <h1 className='ContactMe__title'>Contact Me</h1>
      <div className='ContactMe__container'>
        <div className={`ContactMe__container-social ${slideUp}`}>
          <h4 className='ContactMe__container-social__title'>You can contact me by..</h4>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github' />
            <span>GitHub</span>
          </a>
          <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin' />
            <span>LinkedIn</span>
          </a>
          <a href={twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter' />
            <span>Twitter</span>
          </a>
          <a href={facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook' />
            <span>Facebook</span>
          </a>
          <a href={instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram' />
            <span>Instagram</span>
          </a>
        </div>
        <img
          className='ContactMe__container-social__illustration'
          src={contactMeIllustration}
          alt='code-typing-contactme'
        />
      </div>
      <div className='ContactMe__flex'>
        <img src={contactMeMailSent} alt='contactMe-mail-sent' />
        <ContactForm />
      </div>
    </div>
  )
}

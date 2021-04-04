// Assets
import footerIllustration from '../../assets/footer-illustration.svg'
import footerWave from '../../assets/footer-wave.svg'
// Utils
import {
  facebook,
  linkedin,
  twitter,
  github,
  instagram,
  mailTo,
} from '../../utils/social-links/socialLinks'

export default function Footer() {
  return (
    <div className='Footer'>
      <img src={footerWave} alt='footer-wave' className='Footer__wave' />
      <div className='Footer__container'>
        {/* Quick Links */}
        <div className='Footer__container-card'>
          <h2>Quick Links</h2>
          <div>
            <a href='/#hero'>
              <span>Header</span>
            </a>
            <a href='/#about'>
              <span>About Me</span>
            </a>
            <a href='/#portfolio'>
              <span>Portfolio</span>
            </a>
            <a href='/#projects'>
              <span>Projects</span>
            </a>
            <a href={mailTo} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-at' />
              <span>Send a Email</span>
            </a>{' '}
          </div>
        </div>
        {/* Social Media */}
        <div className='Footer__container-card'>
          <h2>Social Media</h2>
          <div>
            <a href={linkedin} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in' />
              <span>LinkedIn</span>
            </a>
            <a href={twitter} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter' />
              <span>Twitter</span>
            </a>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github' />
              <span>Github</span>
            </a>
            <a href={facebook} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-f' />
              <span>Facebook</span>
            </a>
            <a href={instagram} target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram' />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        {/* Footer Illustration */}
        <img
          className='Footer__container-illustration'
          src={footerIllustration}
          alt='footer-illustration'
        />
      </div>

      <span className='Footer__made'>
        Made with <i className='fas fa-heart' /> by{' '}
        <a href={github} target='_blank' rel='noopener noreferrer'>
          mrLuisFer
        </a>
      </span>
    </div>
  )
}

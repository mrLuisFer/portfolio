import { BrowserRouter as Router } from 'react-router-dom'
// Assets
import heroIllustration from '../assets/hero-illustration.svg'
// Utils
import { slideUp } from '../utils/animateCss/animateCss'
import { linkedin, github } from '../utils/social-links/socialLinks'

export default function Hero(): JSX.Element {
  return (
    <Router>
      <div className='Hero'>
        <img
          className='Hero__illustration'
          src={heroIllustration}
          alt='hero-illustration'
        />
        <div className={`Hero__flex ${slideUp}`}>
          <div className='Hero__personal'>
            <h2 className='Hero__personal-title'>
              <span className='Hero__personal-greet'>Hello!</span> I am{' '}
              <span className='Hero__personal-name'>Luis Alvarez</span>
              <span>
                <i className='fas fa-code Hero__personal-codeIcon' />
              </span>
            </h2>
            <h5 className='Hero__personal-info'>
              <span>
                Frontend <span>Developer</span>
              </span>
              , specialized in
              <span id='Hero__personal-info-js'> Javascript</span> {'&'}{' '}
              <span>
                <span>React</span>
              </span>{' '}
              for UI
            </h5>
          </div>
          <div className='Hero__links'>
            <a
              className='Hero__links-linkedin'
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in' />
            </a>
            <a
              className='Hero__links-github'
              href={github}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </a>
            <a href='/#about'>
              <i className='fas fa-user' /> More About Me
            </a>
          </div>
        </div>
      </div>
    </Router>
  )
}

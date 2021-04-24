import { BrowserRouter as Router } from 'react-router-dom'
import '../../styles/afterBtn.css'
// Assets
import heroIllustration from '../../assets/hero-illustration.svg'
// Utils
import { slideUp } from '../../utils/animateCss/animateCss'
import { linkedin, github } from '../../utils/social-links/socialLinks'

import {
  HeroStyled,
  HeroIllustration,
  HeroPersonal,
  HeroPersonalGreet,
  HeroPersonalTitle,
  HeroPersonalName,
  HeroPersonalCodeIcon,
  HeroPersonalInfo,
  HeroLinks,
  HeroLinksLinkedin,
  HeroLinksGithub,
  HeroLinksAbout,
} from './Hero.styles'

export default function Hero(): JSX.Element {
  return (
    <Router>
      <HeroStyled>
        <HeroIllustration
          src={heroIllustration}
          alt='Illustration of a Developer making code'
        />
        <div className={slideUp}>
          <HeroPersonal>
            <HeroPersonalTitle>
              <HeroPersonalGreet>Hello!</HeroPersonalGreet> I am{' '}
              <HeroPersonalName>Luis Alvarez</HeroPersonalName>
              <span>
                <HeroPersonalCodeIcon className='fas fa-code' />
              </span>
            </HeroPersonalTitle>
            <HeroPersonalInfo>
              <span>
                Frontend <span>Developer</span>
              </span>
              , specialized in
              <span id='Hero__personal-info-js'> Javascript</span> {'&'}{' '}
              <span>
                <span>React</span>
              </span>{' '}
              for UI
            </HeroPersonalInfo>
          </HeroPersonal>
          <HeroLinks>
            <HeroLinksLinkedin
              className='HeroLinksLinkedin'
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in' />
            </HeroLinksLinkedin>
            <HeroLinksGithub
              className='HeroLinksGithub'
              href={github}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </HeroLinksGithub>
            <HeroLinksAbout href='/#about'>
              <i className='fas fa-user' /> More About Me
            </HeroLinksAbout>
          </HeroLinks>
        </div>
      </HeroStyled>
    </Router>
  )
}

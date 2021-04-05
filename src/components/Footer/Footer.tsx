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

import {
  SFooter,
  FooterWave,
  FooterContainer,
  FooterContainerCard,
  FooterContainerCardTitle,
  FooterContainerIllustration,
  FooterMade,
  FooterContainerCardAnchor,
} from './Footer.styles'

export default function Footer() {
  return (
    <SFooter>
      <FooterWave src={footerWave} alt='footer-wave' />
      <FooterContainer>
        {/* Quick Links */}
        <FooterContainerCard>
          <FooterContainerCardTitle>Quick Links</FooterContainerCardTitle>
          <div>
            <FooterContainerCardAnchor href='/#hero'>
              <span>Header</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#about'>
              <span>About Me</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#portfolio'>
              <span>Portfolio</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#projects'>
              <span>Projects</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor
              href={mailTo}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fas fa-at' />
              <span>Send a Email</span>
            </FooterContainerCardAnchor>{' '}
          </div>
        </FooterContainerCard>
        {/* Social Media */}
        <FooterContainerCard>
          <FooterContainerCardTitle>Social Media</FooterContainerCardTitle>
          <div>
            <FooterContainerCardAnchor
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-linkedin-in' />
              <span>LinkedIn</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor
              href={twitter}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-twitter' />
              <span>Twitter</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor
              href={github}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-github' />
              <span>Github</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor
              href={facebook}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-facebook-f' />
              <span>Facebook</span>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor
              href={instagram}
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-instagram' />
              <span>Instagram</span>
            </FooterContainerCardAnchor>
          </div>
        </FooterContainerCard>
        {/* Footer Illustration */}
        <FooterContainerIllustration
          className='Footer__container-illustration'
          src={footerIllustration}
          alt='footer-illustration'
        />
      </FooterContainer>

      <FooterMade>
        Made with <i className='fas fa-heart' /> by{' '}
        <a href={github} target='_blank' rel='noopener noreferrer'>
          mrLuisFer
        </a>
      </FooterMade>
    </SFooter>
  )
}

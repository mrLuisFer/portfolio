import {
  facebook,
  linkedin,
  twitter,
  github,
  instagram,
  mailTo,
} from 'src/utils/social-links/socialLinks'

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

export default function Footer(): JSX.Element {
  return (
    <SFooter>
      <FooterWave
        layout='fill'
        src='/assets/footer-wave.svg'
        alt='Wave style illustration for footer start'
      />
      <FooterContainer>
        {/* Quick Links */}
        <FooterContainerCard>
          <FooterContainerCardTitle>Quick Links</FooterContainerCardTitle>
          <div>
            <FooterContainerCardAnchor href='/#hero'>
              <a>
                <span>Header</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#about'>
              <a>
                <span>About Me</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#portfolio'>
              <a>
                <span>Portfolio</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href='/#projects'>
              <a>
                <span>Projects</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href={mailTo}>
              <a rel='noopener noreferrer' target='_blank'>
                <i className='fas fa-at' />
                <span>Send a Email</span>
              </a>
            </FooterContainerCardAnchor>
          </div>
        </FooterContainerCard>
        {/* Social Media */}
        <FooterContainerCard>
          <FooterContainerCardTitle>Social Media</FooterContainerCardTitle>
          <div>
            <FooterContainerCardAnchor href={linkedin}>
              <a target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin-in' />
                <span>LinkedIn</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href={twitter}>
              <a target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter' />
                <span>Twitter</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href={github}>
              <a target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github' />
                <span>Github</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href={facebook}>
              <a target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook-f' />
                <span>Facebook</span>
              </a>
            </FooterContainerCardAnchor>
            <FooterContainerCardAnchor href={instagram}>
              <a target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram' />
                <span>Instagram</span>
              </a>
            </FooterContainerCardAnchor>
          </div>
        </FooterContainerCard>
        <FooterContainerIllustration
          height='250px'
          width='250px'
          src='/assets/footer-illustration.svg'
          alt='Illustration of a Boy on a Cell Phone for the Footer'
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

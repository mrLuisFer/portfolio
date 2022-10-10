import { useState } from 'react'
import Link from 'next/link'

// Utils
import { bounceIn, zoomIn, fadeIn } from 'src/utils/animateCss/animateCss'
import { facebook, linkedin, mailTo, twitter } from 'src/utils/social-links/socialLinks'

import {
  NavBarStyled,
  NavBarLogo,
  NavBarLogoTitle,
  NavBarLinks,
  NavBarLink,
  NavBarSocialMedia,
  NavBarSocialMediaIcons,
  NavBarSocialMediaIconsAnchors,
  NavBarSocialMediaSpan,
  IconToRotate,
  NavBarSocialMediaIconsAnchor,
} from './NavBar.styles'

export default function NavBar(): JSX.Element {
  // State that handles the icons to be seen
  const [showIcons, setShowIcons] = useState<Boolean>(false)

  const handleShowIcons = (): void => {
    setShowIcons(!showIcons)
  }

  return (
    <NavBarStyled id='hero'>
      <NavBarLogo>
        <NavBarLogoTitle className={`${bounceIn}`}>
          <Link href='/'>
            <a>
              <img src='assets/navbar-logo/navbar-logo.svg' alt='mrLuisFer logo' />
              LuisFer
            </a>
          </Link>
        </NavBarLogoTitle>
      </NavBarLogo>
      <NavBarLinks className={`${fadeIn}`}>
        <NavBarLink href='/'>
          <a>Home</a>
        </NavBarLink>
        <NavBarLink href='/contact-me'>
          <a>Contact me</a>
        </NavBarLink>
        <NavBarSocialMedia>
          <NavBarSocialMediaSpan
            onClick={handleShowIcons}
            aria-hidden='true'
            showIns={showIcons}>
            <IconToRotate className='fas fa-caret-right' showIns={showIcons} />
            Social Media
            {showIcons ? ':' : ''}
          </NavBarSocialMediaSpan>

          {showIcons ? (
            <NavBarSocialMediaIcons>
              <NavBarSocialMediaIconsAnchors className={`${zoomIn}`}>
                <NavBarSocialMediaIconsAnchor
                  className='NavBarSocialMediaAnchorFacebook'
                  href={facebook}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-facebook-f' />
                </NavBarSocialMediaIconsAnchor>
                <NavBarSocialMediaIconsAnchor
                  className='NavBarSocialMediaAnchorTwitter'
                  href={twitter}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-twitter' />
                </NavBarSocialMediaIconsAnchor>
                <NavBarSocialMediaIconsAnchor
                  className='NavBarSocialMediaAnchorLinkedin'
                  href={linkedin}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fab fa-linkedin-in' />
                </NavBarSocialMediaIconsAnchor>
                <NavBarSocialMediaIconsAnchor
                  className='NavBarSocialMediaAnchorMailTo'
                  href={mailTo}
                  target='_blank'
                  rel='noopener noreferrer'>
                  <i className='fas fa-paper-plane' />
                </NavBarSocialMediaIconsAnchor>
              </NavBarSocialMediaIconsAnchors>
            </NavBarSocialMediaIcons>
          ) : (
            ''
          )}
        </NavBarSocialMedia>
      </NavBarLinks>
    </NavBarStyled>
  )
}

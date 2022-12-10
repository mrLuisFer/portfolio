import { facebook, linkedin, twitter } from 'src/utils/social-links/socialLinks'
import { Box } from '@chakra-ui/react'
import GradientBtn from '../custom/GradientBtn'
import NavBarMobile from './NavBarMobile'
import NavBarLogo from './NavBarLogo'
import paths from 'src/constants/paths'
import SocialMediaItem from './SocialMediaItem'

interface ISocialMediaIcons {
  href: string
  label: string
  external: boolean
}

const socialMediaIcons: ISocialMediaIcons[] = [
  {
    href: facebook,
    label: 'Facebook',
    external: true,
  },
  {
    href: twitter,
    label: 'Twitter',
    external: true,
  },
  {
    href: linkedin,
    label: 'LinkedIn',
    external: true,
  },
  {
    href: paths.contact,
    label: 'Contact Me',
    external: false,
  },
]

export default function NavBar(): JSX.Element {
  return (
    <>
      <Box
        as='header'
        display={['none', 'flex']}
        justifyContent='space-between'
        pt='1rem'
        mb='3rem'>
        <NavBarLogo />
        <Box as='nav' display='flex' alignItems='center' gap='1rem'>
          {socialMediaIcons.map((item) => (
            <SocialMediaItem item={item} />
          ))}
        </Box>
        <Box>
          <GradientBtn colorscheme='orange' href={paths.contactForm} asLink>
            Send email
          </GradientBtn>
        </Box>
      </Box>
      <NavBarMobile />
    </>
  )
}

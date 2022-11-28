import { facebook, linkedin, twitter } from 'src/utils/social-links/socialLinks'
import { Box } from '@chakra-ui/react'
import Link from '../custom/Link'
import GradientBtn from '../custom/GradientBtn'
import NavBarMobile from './NavBarMobile'
import NavBarLogo from './NavBarLogo'

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
    href: '/contact',
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
            <Box key={item.label}>
              <Link
                href={item.href}
                external={item.external}
                opacity='0.5'
                _hover={{ opacity: '1' }}>
                {item.label}
              </Link>
            </Box>
          ))}
        </Box>
        <Box>
          <GradientBtn colorscheme='orange' href='/contact/form' asLink>
            Send email
          </GradientBtn>
        </Box>
      </Box>
      <NavBarMobile />
    </>
  )
}

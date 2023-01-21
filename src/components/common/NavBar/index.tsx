import { facebook, linkedin, twitter } from 'src/utils/social-links/socialLinks'
import { Box } from '@chakra-ui/react'
import GradientBtn from '../custom/GradientBtn'
import NavBarMobile from './NavBarMobile'
import NavBarLogo from './NavBarLogo'
import paths from 'src/constants/paths'
import SocialMediaItem from './SocialMediaItem'
import { useTranslation } from 'src/hooks/useTranslation'
import ChangeLang from './ChangeLang'

interface ISocialMediaIcons {
  href: string
  label: string
  external: boolean
}

const getSocialMediaIcons = (t: (key: string) => string): ISocialMediaIcons[] => [
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
    label: t('contactMe'),
    external: false,
  },
]

export default function NavBar(): JSX.Element {
  const { t } = useTranslation()
  const socialMediaIcons = getSocialMediaIcons(t)

  return (
    <>
      <Box
        as='header'
        display={['none', 'none', 'flex']}
        justifyContent='space-between'
        pt='1rem'
        mb='3rem'
      >
        <NavBarLogo />
        <Box as='nav' display='flex' alignItems='center' gap='1rem'>
          {socialMediaIcons.map((item) => (
            <SocialMediaItem key={item.label} item={item} />
          ))}
          <ChangeLang />
        </Box>
        <Box>
          <GradientBtn colorscheme='orange' href={paths.contactForm} asLink>
            {t('sendEmail')}
          </GradientBtn>
        </Box>
      </Box>
      <NavBarMobile />
    </>
  )
}

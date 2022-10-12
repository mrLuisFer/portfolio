import Image from 'next/image'
import { facebook, linkedin, twitter } from 'src/utils/social-links/socialLinks'
import { Box, Text } from '@chakra-ui/react'
import Link from '../Custom/Link'
import GradientBtn from '../Custom/GradientBtn'

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
    <Box as='header' display='flex' justifyContent='space-between' pt='1rem' mb='3rem'>
      <Box>
        <Link href='/' display='flex' alignItems='flex-end' gap='0.1rem'>
          <Image src='/assets/navbar-logo/navbar-logo.svg' width='30px' height='30px' />
          <Text fontWeight='bold' fontSize='2xl'>
            LuisFer
          </Text>
        </Link>
      </Box>
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
  )
}

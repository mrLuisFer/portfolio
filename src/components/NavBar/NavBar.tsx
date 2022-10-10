import Image from 'next/image'
import { facebook, linkedin, twitter } from 'src/utils/social-links/socialLinks'
import { Box, Text } from '@chakra-ui/react'
import Link from '../Custom/Link'
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
          <Box>
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
        <Link
          href='/contact/form'
          background='white'
          color='white'
          borderRadius='5px'
          backgroundImage='linear-gradient(165deg,#FF4D4D, #F9CB28)'
          backgroundClip='padding-box'
          fontWeight='semibold'
          p='0.7rem 0.2rem'>
          <Text
            as='span'
            background='black'
            p='0.5rem 1rem'
            lineHeight='10'
            borderRadius='5px'
            fontWeight='extrabold'
            transition='0.15s ease'
            _hover={{
              bgGradient: 'linear(165deg,#FF4D4D, #F9CB28)',
              color: 'black',
              boxShadow: '0px 0px 5px 10px linear-gradient(165deg,#FF4D4D, #F9CB28)',
            }}>
            Send email
          </Text>
        </Link>
      </Box>
    </Box>
  )
}

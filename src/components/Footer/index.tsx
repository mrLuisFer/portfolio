import { Box, Button, Link as ChakraLink, Tooltip, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import { BiUpArrow } from 'react-icons/bi'
import { GradientColors } from 'src/utils/gradientColors'
import Title from '../Custom/Title'

interface FooterLink {
  label: string
  href: string
  isExternal: boolean
}
interface FooterElements {
  title: string
  titleColor: keyof GradientColors
  links: FooterLink[]
}
const footerElements: FooterElements[] = [
  {
    title: 'Social',
    titleColor: 'darkBlue',
    links: [
      { label: 'Twitter', href: '', isExternal: true },
      { label: 'GitHub', href: '', isExternal: true },
      { label: 'LinkedIn', href: '', isExternal: true },
      { label: 'Facebook', href: '', isExternal: true },
      { label: 'Gitlab', href: '', isExternal: true },
    ],
  },
  {
    title: 'Navigate to',
    titleColor: 'orange',
    links: [
      {
        label: 'Contact',
        href: '/contact',
        isExternal: false,
      },
      {
        label: 'Projects',
        href: '/projects',
        isExternal: false,
      },
      {
        label: 'Blog',
        href: '/blog',
        isExternal: false,
      },
    ],
  },
  {
    title: 'Other',
    titleColor: 'yellow',
    links: [
      {
        label: 'Seo Generator',
        href: '',
        isExternal: true,
      },
      {
        label: 'Linktry',
        href: '',
        isExternal: true,
      },
      {
        label: 'GitHub User Finder',
        href: '',
        isExternal: true,
      },
      {
        label: 'Git Basic Guide',
        href: '',
        isExternal: true,
      },
    ],
  },
]

export default function Footer(): JSX.Element {
  const handleToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <Divider opacity='0.2' mt='50px' />
      <Box position='relative' mt='50px' mb='2rem'>
        <Box
          as='footer'
          display='grid'
          gridTemplateColumns='repeat(4, 1fr)'
          justifyContent='center'
          alignItems='start'>
          <Box>logo</Box>
          {footerElements.map((item) => (
            <Box key={item.title}>
              <Title colorscheme={item.titleColor} bgAnimate>
                {item.title}
              </Title>
              <Box display='flex' flexDirection='column' gap='1rem' mt='1rem'>
                {item.links.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <ChakraLink
                      color='white'
                      opacity='0.5'
                      _hover={{ opacity: '1' }}
                      display='inline-block'
                      w='fit-content'>
                      {link.label}
                    </ChakraLink>
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          position='absolute'
          right={0}
          top={0}
          opacity='0.2'
          _hover={{ opacity: '1' }}>
          <Tooltip label='Go to top' hasArrow>
            <Button
              bg='gray.900'
              fontSize='1.5rem'
              p='0'
              onClick={handleToTop}
              _hover={{
                background: 'gray.800',
              }}
              _active={{
                background: 'gray.900',
              }}>
              <BiUpArrow />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </>
  )
}

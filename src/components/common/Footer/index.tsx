import { Box, Button, Link as ChakraLink, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import { BiUpArrow } from 'react-icons/bi'
import Title from '../custom/Title'
import { getFooterElements } from './footerLinks'
import Tooltip from '../custom/Tooltip'
import Image from 'next/image'
import { useTranslation } from 'src/hooks/useTranslation'

export default function Footer(): JSX.Element {
  const { t } = useTranslation()
  const footerElements = getFooterElements(t)

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
          display={['flex', 'grid']}
          gridTemplateColumns={['', 'repeat(4, 1fr)']}
          justifyContent={['start', 'center']}
          flexDirection={['column', 'row']}
          alignItems='start'
          gap={['2rem', '0']}
        >
          <Box position='relative' width='150px' h='40px' cursor='pointer'>
            <Link href='/'>
              <a>
                <Image
                  draggable='false'
                  src='/assets/footer/logo.svg'
                  alt='mrLuisFer logo'
                  layout='fill'
                />
              </a>
            </Link>
          </Box>
          {footerElements.map((item) => (
            <Box key={item.title}>
              <Title colorscheme={item.titleColor} bgAnimate>
                {item.title}
              </Title>
              <Box display='flex' flexDirection='column' gap='1rem' mt='1rem'>
                {item.links.map((link) => {
                  if (link.isExternal) {
                    return (
                      <ChakraLink
                        href={link.href}
                        key={link.label}
                        color='white'
                        opacity='0.5'
                        _hover={{ opacity: '1' }}
                        display='inline-block'
                        w='fit-content'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {link.label}
                      </ChakraLink>
                    )
                  }

                  return (
                    <Link href={link.href} key={link.label}>
                      <ChakraLink
                        color='white'
                        opacity='0.5'
                        _hover={{ opacity: '1' }}
                        display='inline-block'
                        w='fit-content'
                      >
                        {link.label}
                      </ChakraLink>
                    </Link>
                  )
                })}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          position='absolute'
          right={0}
          top={0}
          opacity='0.2'
          _hover={{ opacity: '1' }}
        >
          <Tooltip label={t('goToTop')}>
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
              }}
            >
              <BiUpArrow />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </>
  )
}

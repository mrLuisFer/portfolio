import {
  Box,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerHeader,
  Button,
  SlideFade,
  Text,
} from '@chakra-ui/react'
import NavBarLogo from './NavBarLogo'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useRef, useState } from 'react'
import Tooltip from '../custom/Tooltip'
import Link from 'next/link'
import { useTranslation } from 'src/hooks/useTranslation'
import { TbExternalLink } from 'react-icons/tb'
import { BsArrowDownRightSquare } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'

interface INavbarMobileTypes {
  label: string
  href: string
  isExternal?: boolean
  customComponent?: JSX.Element
}

const links: INavbarMobileTypes[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'contact',
    href: '/contact',
  },
  {
    label: 'projects',
    href: '/projects',
  },
  {
    label: 'Blog',
    href: 'https://mrluisfer-blog.netlify.app/',
    isExternal: true,
  },
]

const externalLinks = [
  {
    label: 'Seo Generator',
    href: 'https://seo-generator.vercel.app/',
    isExternal: true,
  },
  {
    label: 'Linktry',
    href: 'https://linktry-mrluisfer.vercel.app/',
    isExternal: true,
  },
  {
    label: 'GitHub User Finder',
    href: 'https://gh-find.netlify.app/',
    isExternal: true,
  },
  {
    label: 'Git Basic Guide',
    href: 'https://git-guia.netlify.app/',
    isExternal: true,
  },
  {
    label: 'moreProjects',
    href: 'https://github.com/mrLuisFer?tab=repositories',
    isExternal: true,
    customComponent: <AiOutlineGithub />,
  },
]

export default function NavBarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Box
        display={['flex', 'flex', 'none']}
        alignItems='center'
        justifyContent='space-between'
        pt='1rem'
        mb='3rem'
      >
        <NavBarLogo />
        <Box as='button' onClick={onOpen} fontSize='2rem' ref={btnRef}>
          <HiOutlineMenuAlt3 />
        </Box>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton fontSize={15} />
          <DrawerBody background='black'>
            <Box as='ul' mt={10} display='flex' flexDirection='column' gap='2rem'>
              {links.map((link: INavbarMobileTypes) => (
                <NavbarMobileLink
                  key={`${link.href} - ${link.label}`}
                  link={link}
                  onClose={onClose}
                />
              ))}
            </Box>

            <Box as='ul' mt={10} display='flex' flexDirection='column' gap='2rem'>
              <Text opacity={0.4} fontSize={15} mb={0}>
                Other projects:
              </Text>
              {externalLinks.map((link: INavbarMobileTypes) => (
                <NavbarMobileLink
                  key={`${link.href} - ${link.label}`}
                  link={link}
                  onClose={onClose}
                />
              ))}
            </Box>
          </DrawerBody>
          <DrawerFooter background='black'>
            <Button variant='outline' onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const NavbarMobileLink = ({
  onClose,
  link,
}: {
  onClose: () => void
  link: INavbarMobileTypes
}) => {
  const [showIcon, setShowIcon] = useState<boolean>(false)
  const { t } = useTranslation()

  const BoxLink = () => (
    <Box
      as='a'
      href={link.href}
      color='white'
      opacity='0.8'
      _hover={{ opacity: 1 }}
      onClick={onClose}
      fontSize='xl'
      cursor='pointer'
      display='flex'
      alignItems='center'
      gap='0.5rem'
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      target={link.isExternal ? '_blank' : '_self'}
      rel='noreferrer'
    >
      {t(link.label)}
      <SlideFade in={showIcon} offsetX='20px' offsetY='0'>
        <Box cursor='pointer'>
          {link.customComponent ? (
            link.customComponent
          ) : link.isExternal ? (
            <TbExternalLink />
          ) : (
            <BsArrowDownRightSquare color='#fff' />
          )}
        </Box>
      </SlideFade>
    </Box>
  )

  if (link.isExternal) {
    return (
      <Box as='li' key={`${link.href} - ${link.label}`} width='fit-content'>
        <Tooltip label={link.href}>
          <BoxLink />
        </Tooltip>
      </Box>
    )
  }

  return (
    <Box as='li' key={`${link.href} - ${link.label}`} width='fit-content'>
      <Link href={link.href}>
        <BoxLink />
      </Link>
    </Box>
  )
}

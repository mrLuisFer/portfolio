import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import paths from 'src/constants/paths'

const NavBarLogo = () => (
  <Box position='relative' width='150px' h='40px' cursor='pointer'>
    <Link href={paths.root}>
      <a>
        <Image src='/assets/footer/logo.svg' alt='mrLuisFer logo' layout='fill' />
      </a>
    </Link>
  </Box>
)

export default NavBarLogo

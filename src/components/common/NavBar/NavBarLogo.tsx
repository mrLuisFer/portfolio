import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import Link from '../custom/Link'
import paths from 'src/constants/paths'

const NavBarLogo = () => (
  <Box>
    <Link href={paths.root} display='flex' alignItems='flex-end' gap='0.1rem'>
      <Image src='/assets/navbar-logo/navbar-logo.svg' width='30px' height='30px' />
      <Text fontWeight='bold' fontSize='2xl'>
        LuisFer
      </Text>
    </Link>
  </Box>
)

export default NavBarLogo

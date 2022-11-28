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
} from '@chakra-ui/react'
import NavBarLogo from './NavBarLogo'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useRef } from 'react'

export default function NavBarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Box
        display={['flex', 'none']}
        alignItems='center'
        justifyContent='space-between'
        pt='1rem'
        mb='3rem'>
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
        size='full'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody background='black'>
            <ul>
              <li>Some</li>
            </ul>
          </DrawerBody>
          <DrawerFooter background='black'>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

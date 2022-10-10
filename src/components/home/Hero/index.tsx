// Utils
import { linkedin, github } from 'src/utils/social-links/socialLinks'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import Link from '../../Custom/Link'

export default function Hero(): JSX.Element {
  return (
    <Box display='flex' justifyContent='space-around'>
      <Image
        width='300px'
        height='300px'
        src='/assets/hero-illustration.svg'
        alt='Illustration of a developer person making code'
      />
      <div>
        <Box>
          <Box>
            <Text fontSize='3xl' opacity='0.5'>
              Hello!
            </Text>
            <Text as='p' fontSize='4xl' display='flex' gap='0.5rem' fontWeight='bold'>
              I'm{' '}
              <Link
                href='https://github.com/mrLuisFer'
                external
                display='flex'
                alignItems='center'
                gap='1rem'
                bgClip='text'
                fontWeight='extrabold'
                bgGradient='linear(90deg, #007CF0, #00DFD8)'>
                Luis Alvarez
                <Text as='i' className='fas fa-code' />
              </Link>
            </Text>
          </Box>
          <Box>
            <Text
              as='p'
              fontSize='xl'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontWeight='extrabold'
              mt='0.5rem'>
              Frontend <Text as='span'>Developer</Text>
            </Text>
            <Text as='p' fontSize='lg' opacity='0.8' mt='1rem'>
              Specialized in{' '}
              <Text
                as='span'
                fontWeight='bold'
                opacity='1'
                bgGradient='linear(to-l, #fff700, #faff94)'
                bgClip='text'>
                Javascript
              </Text>{' '}
              &{' '}
              <Text
                as='span'
                opacity='1'
                fontWeight='bold'
                bgGradient='linear(to-r, #2e82ff, #0077f6)'
                bgClip='text'>
                React
              </Text>{' '}
              for UI <br />
              and Web Aplications
            </Text>
          </Box>
        </Box>
        <Box display='flex' alignItems='center' gap='2rem' mt='2rem'>
          <Link href={linkedin} fontSize='xl' opacity='0.8' _hover={{ opacity: '1' }}>
            <Text as='i' className='fab fa-linkedin-in' />
          </Link>
          <Link href={github} fontSize='xl' opacity='0.8' _hover={{ opacity: '1' }}>
            <Text as='i' className='fab fa-github' />
          </Link>
          <Link
            href='/#about'
            display='flex'
            padding='0.5rem 1rem'
            alignItems='center'
            gap='0.7rem'
            borderRadius='5px'
            fontWeight='medium'
            background='white'
            color='black'
            border='1px solid black'
            _hover={{
              background: 'black',
              color: 'white',
              border: '1px solid white',
            }}>
            <Text as='i' className='fas fa-user' />
            About Me
          </Link>
        </Box>
      </div>
    </Box>
  )
}

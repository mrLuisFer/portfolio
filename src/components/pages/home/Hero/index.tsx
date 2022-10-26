import { linkedin, github } from 'src/utils/social-links/socialLinks'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import Link from '../../../custom/Link'
import Title from 'src/components/custom/Title'

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
            <Text
              as='div'
              fontSize='4xl'
              display='flex'
              alignItems='center'
              gap='0.5rem'
              fontWeight='bold'>
              I&apos;m{' '}
              <Title id='titleName' colorscheme='blue' bgAnimate>
                <Link
                  href='https://github.com/mrLuisFer'
                  external
                  display='flex'
                  alignItems='center'
                  gap='1rem'
                  fontWeight='extrabold'
                  transition='0.15s ease'
                  noBrightness>
                  Luis Alvarez
                  <Text as='i' className='fas fa-code' />
                </Link>
              </Title>
            </Text>
          </Box>
          <Box>
            <Title
              id='seniority'
              as='p'
              fontSize='xl'
              weight='extrabold'
              mt='0.5rem'
              colorscheme='pink'
              bgAnimate
              display='inline-block'>
              Frontend <Text as='span'>Developer</Text>
            </Title>
            <Text as='p' fontSize='lg' opacity='0.8' mt='1rem'>
              Specialized in{' '}
              <Title
                id='js-label'
                as='span'
                weight='bold'
                colorscheme='yellow'
                fontSize='lg'
                opacity='1'>
                Javascript
              </Title>{' '}
              &{' '}
              <Title
                id='react-label'
                as='span'
                opacity='1'
                weight='bold'
                fontSize='lg'
                colorscheme='darkBlue'>
                React
              </Title>{' '}
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

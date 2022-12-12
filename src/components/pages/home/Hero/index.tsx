import { linkedin, github } from '../../../../utils/social-links/socialLinks'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import Link from '../../../common/custom/Link'
import Title from '../../../common/custom/Title'
import Tooltip from 'src/components/common/custom/Tooltip'
import { useTranslation } from 'src/hooks/useTranslation'

export default function Hero(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Box
      display='flex'
      justifyContent={['center', 'space-around']}
      flexDirection={['column', 'row']}
      gap={['1rem', '0']}>
      <Image
        width='300px'
        height='300px'
        src='/assets/hero-illustration.svg'
        alt='Illustration of a developer person making code'
      />
      <div>
        <Box>
          <Box>
            <Text fontSize={['4xl', '3xl']} display={['none', 'block']} opacity='0.5'>
              {t('hello')}!
            </Text>
            <Text
              as='div'
              fontSize='4xl'
              display='flex'
              alignItems='center'
              gap='0.5rem'
              justifyContent={['center', 'flex-start']}
              fontWeight='bold'>
              {t('heroIam')}{' '}
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
              fontSize={['2xl', 'xl']}
              weight='extrabold'
              colorscheme='pink'
              bgAnimate
              display={['block', 'inline-block']}
              textAlign={['center', 'left']}
              margin={['0.5rem auto 0', '0.5rem 0 0 0']}>
              {/* Frontend <Text as='span'>Developer</Text> */}
              {t('heroJob')}
            </Title>
            <Text
              as='p'
              fontSize='lg'
              opacity='0.8'
              textAlign={['center', 'left']}
              m={['1rem 1.5rem 0 1.5rem', '1rem 0 0']}>
              {t('specializedIn')}{' '}
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
              {t('forUi')} <Box as='br' display={['none', 'block']} />
              {t('andWebAplications')}
            </Text>
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent={['center', 'flex-start']}
          gap='2rem'
          mt='2rem'>
          <Tooltip label='LinkedIn'>
            <Link
              href={linkedin}
              fontSize='xl'
              external
              opacity='0.8'
              _hover={{ opacity: '1' }}>
              <Text as='i' className='fab fa-linkedin-in' />
            </Link>
          </Tooltip>
          <Tooltip label='GitHub'>
            <Link
              href={github}
              fontSize='xl'
              external
              opacity='0.8'
              _hover={{ opacity: '1' }}>
              <Text as='i' className='fab fa-github' />
            </Link>
          </Tooltip>
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
            {t('aboutMe')}
          </Link>
        </Box>
      </div>
    </Box>
  )
}

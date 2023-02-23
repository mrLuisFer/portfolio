import { linkedin, github } from '../../../../utils/social-links/socialLinks'
import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import Link from '../../../common/custom/Link'
import Title from '../../../common/custom/Title'
import Tooltip from 'src/components/common/custom/Tooltip'
import { useTranslation } from 'src/hooks/useTranslation'
import HighlightedParagraph from '../../../common/custom/HighlightedParagraph'
import HeroAnimatedImg from './HeroAnimatedImg'

const heroSocialMedia = [
  {
    href: linkedin,
    label: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
  },
  {
    href: github,
    label: 'GitHub',
    icon: 'fab fa-github',
  },
]

export default function Hero(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Box
      display='flex'
      justifyContent={['center', 'center']}
      flexDirection={['column', 'row']}
      alignItems={['', 'flex-start']}
      gap={['1rem', '2rem']}>
      <HeroAnimatedImg />
      <div>
        <Box>
          <Box>
            <Text
              fontSize={['4xl', '3xl', '4xl']}
              display={['none', 'block']}
              opacity='0.5'>
              {t('hello')}!
            </Text>
            <Text
              as='div'
              fontSize={['4xl', '4xl', '5xl']}
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
                  noBrightness
                  fontSize={['4xl', '4xl', '5xl']}>
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
              {t('heroJob')}
            </Title>
            <HighlightedParagraph color='darkBlue'>
              {t('specializedIn')} <span>Javascript</span>, <span> Typescript</span> &
              <span> React.js </span>
              {t('forUi')} <Box as='br' display={['none', 'block']} />
              {t('andWebAplications')}
            </HighlightedParagraph>
            <HighlightedParagraph color='orange'>
              {t('And')} <span>Node.js</span> {t('for Backend Development')}
            </HighlightedParagraph>
          </Box>
        </Box>
        <Box
          display='flex'
          alignItems='center'
          justifyContent={['center', 'flex-start']}
          gap='2rem'
          mt='2rem'>
          {heroSocialMedia.map((social) => (
            <Tooltip label={social.label} key={social.label}>
              <Link
                href={social.href}
                fontSize='xl'
                external
                opacity='0.8'
                _hover={{ opacity: '1' }}>
                <Text
                  as='i'
                  className={social.icon}
                  transition={'0.15s ease'}
                  _hover={{
                    transform: 'scale(1.2)',
                    filter: 'drop-shadow(0px 0px 5px rgb(255, 255, 255, 0.5))',
                  }}
                />
              </Link>
            </Tooltip>
          ))}
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
            transition='0.15s ease'
            _hover={{
              background: 'black',
              color: 'white',
              border: '1px solid white',
              transform: 'scale(1.05)',
              boxShadow: '0 0 10px 0 rgba(255,255,255,0.3)',
            }}>
            <Text as='i' className='fas fa-user' />
            {t('aboutMe')}
          </Link>
        </Box>
      </div>
    </Box>
  )
}

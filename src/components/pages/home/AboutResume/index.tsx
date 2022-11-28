import { Box } from '@chakra-ui/react'
import Title from '../../../common/custom/Title'
import GradientBtn from '../../../common/custom/GradientBtn'
import Paragraph from '../../../common/custom/Paragraph'

export default function AboutResume(): JSX.Element {
  return (
    <Box mt='8rem'>
      <Title
        id='about'
        colorscheme='pink'
        fontSize='5xl'
        textAlign='center'
        helperText='Main information about me and what I love to do'>
        About Me
      </Title>
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='center'
        gap='2rem'
        mt='2rem'
        flexDirection={['column', 'row']}
        textAlign={['justify', 'left']}
        padding={['0 1rem', '0']}>
        <Paragraph>
          Hi!, my name is <a href='https://github.com/mrLuisFer'>Luis Fernando Alvarez</a>{' '}
          I am a <span>Software Developer</span>, focused on{' '}
          <span>Frontend Developer</span>, I like to <span>learn</span> new things every
          day and put them into practice developing projects and applications that make me
          very happy to do what I love.
        </Paragraph>
        <Box maxW='488px' lineHeight={1.6}>
          <Paragraph mb='2rem'>
            I am also a student & I love to learn about the{' '}
            <span>world of programming</span>, learning new technologies, and doing
            freelance work and projects.
          </Paragraph>
          <Box display={['flex', 'block']} justifyContent={['center', 'flex-start']}>
            <GradientBtn
              colorscheme='blue'
              href='/cv-resume.pdf'
              asLink
              download
              iconComponent={<i className='fas fa-cloud-download-alt' />}
              padding={['0.2rem 0.2rem', '0.7rem 0.2rem']}>
              Download My CV
            </GradientBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

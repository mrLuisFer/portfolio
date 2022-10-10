import { Box, Image as ChakraImg } from '@chakra-ui/react'
import Link from 'src/components/Custom/Link'
import Title from 'src/components/Custom/Title'

export default function AboutResume(): JSX.Element {
  return (
    <Box>
      <Box>
        <div>
          <Box>
            <Title id='about' colorscheme='pink'>
              About Me
            </Title>
            <Box>Main information about me and what I love to do</Box>
          </Box>
          <Box>
            <p>
              Hi!, my name is <span>Luis Fernando Alvarez</span> I am a{' '}
              <span>Software Developer</span>, focused on <span>Frontend Developer</span>,
              I like to <span>learn</span> new things every day and put them into practice
              developing projects and applications that make me very happy to do what I
              love.
              <br /> I am also a student & I love to learn about the{' '}
              <span>world of programming</span>, learning new technologies, and doing
              freelance work and projects.
            </p>
            {/* Button to download the CV */}
            <Link href='/cv-resume.pdf' download>
              <i className='fas fa-cloud-download-alt' />
              Download My CV
            </Link>
          </Box>
        </div>
        <Box className='AboutResume__info-flying-illustration'>
          <ChakraImg
            src='/assets/flying-about-resume-illustration.svg'
            alt='Floating illustration about ideas and inspiration'
          />
        </Box>
      </Box>
      <ChakraImg
        src='/assets/wave-about-resume-down.svg'
        alt='Wave style illustration for the final part of the about section'
      />
    </Box>
  )
}

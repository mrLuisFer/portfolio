// Assets
import aboutResumeIllustration from 'src/assets/flying-about-resume-illustration.svg'
import waveAboutResume from 'src/assets/wave-about-resume.svg'
import waveAboutResumeDown from 'src/assets/wave-about-resume-down.svg'
// Utils
import { bounceIn } from 'src/utils/animateCss/animateCss'

import {
  SAboutResume,
  AboutResumeWave,
  AboutResummeWaveDown,
  AboutResumeInfo,
  AboutResumeInfoTitleContainer,
  AboutResumeInfoTitle,
  AboutResumeInfoTitleText,
  AboutResumeInfoText,
  AboutResumeInfoIllustrationContainer,
  AboutResumeInfoIllustration,
  AboutResumeInfoBtn,
} from './AboutResume.styles'

export default function AboutResume(): JSX.Element {
  return (
    <SAboutResume>
      <AboutResumeWave
        src={waveAboutResume}
        alt='Illustration for the about section of mrLuisFer'
      />
      <AboutResumeInfo>
        <div>
          <AboutResumeInfoTitleContainer>
            <AboutResumeInfoTitle id='about'>About Me</AboutResumeInfoTitle>
            <AboutResumeInfoTitleText>
              Main information about me and what I love to do
            </AboutResumeInfoTitleText>
          </AboutResumeInfoTitleContainer>
          <AboutResumeInfoText>
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
            <AboutResumeInfoBtn href='/cv-resume.pdf' download>
              <i className='fas fa-cloud-download-alt' />
              Download My CV
            </AboutResumeInfoBtn>
          </AboutResumeInfoText>
        </div>
        <AboutResumeInfoIllustrationContainer className='AboutResume__info-flying-illustration'>
          <AboutResumeInfoIllustration
            src={aboutResumeIllustration}
            className={bounceIn}
            alt='Floating illustration about ideas and inspiration'
          />
        </AboutResumeInfoIllustrationContainer>
      </AboutResumeInfo>
      <AboutResummeWaveDown
        src={waveAboutResumeDown}
        alt='Wave style illustration for the final part of the about section'
      />
    </SAboutResume>
  )
}

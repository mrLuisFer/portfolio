// Assets
import aboutResumeIllustration from '../../assets/flying-about-resume-illustration.svg'
import waveAboutResume from '../../assets/wave-about-resume.svg'
import waveAboutResumeDown from '../../assets/wave-about-resume-down.svg'
// Utils
import { bounceIn } from '../../utils/animateCss/animateCss'

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
} from './AboutResume.styles'

export default function AboutResume(): JSX.Element {
  return (
    <SAboutResume>
      <AboutResumeWave src={waveAboutResume} alt='wave-about-resume' />
      <AboutResumeInfo>
        <div>
          <AboutResumeInfoTitleContainer>
            <AboutResumeInfoTitle>
              <i className='fas fa-angle-right' id='about' />
              About Me
            </AboutResumeInfoTitle>
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
            <a href='/cv-resume.pdf' download>
              <i className='fas fa-cloud-download-alt' />
              Download My CV
            </a>
          </AboutResumeInfoText>
        </div>
        <AboutResumeInfoIllustrationContainer className='AboutResume__info-flying-illustration'>
          <AboutResumeInfoIllustration
            src={aboutResumeIllustration}
            className={bounceIn}
            alt='flying-about-resume-illustration'
          />
        </AboutResumeInfoIllustrationContainer>
      </AboutResumeInfo>
      <AboutResummeWaveDown src={waveAboutResumeDown} alt='wave-about-resume-down' />
    </SAboutResume>
  )
}

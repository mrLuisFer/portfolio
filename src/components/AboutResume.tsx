// Assets
import aboutResumeIllustration from "../assets/flying-about-resume-illustration.svg"
import waveAboutResume from "../assets/wave-about-resume.svg"
import waveAboutResumeDown from "../assets/wave-about-resume-down.svg"
// Utils
import { bounceIn } from "../utils/animateCss/animateCss"

export default function AboutResume(): JSX.Element {
  return (
    <div className="AboutResume">
      <img
        src={waveAboutResume}
        alt="wave-about-resume"
        className="AboutResume__wave"
      />
      <div className="AboutResume__info">
        <div>
          <div className="AboutResume__info-title">
            <h2>
              <i className="fas fa-angle-right" id="about"></i>About Me
            </h2>
            <p>Main information about me and what I love to do</p>
          </div>
          <div className="AboutResume__info-text">
            <p>
              Hi!, my name is <span>Luis Fernando Alvarez</span> I'm a{" "}
              <span>Software Developer</span>, focused on{" "}
              <span>Frontend Developer</span>, I like to <span>learn</span> new
              things every day and put them into practice developing projects
              and applications that make me very happy to do what I love.
              <br /> I'm also a student & I love to learn about the{" "}
              <span>world of programming</span>, learning new technologies, and
              doing freelance work and projects.
            </p>
            {/* Button to download the CV */}
            <a href="/cv-resume.pdf" download>
              <i className="fas fa-cloud-download-alt"></i>
              Download My CV
            </a>
          </div>
        </div>
        <div className="AboutResume__info-flying-illustration">
          <img
            src={aboutResumeIllustration}
            className={bounceIn}
            alt="flying-about-resume-illustration"
          />
        </div>
      </div>
      <img
        src={waveAboutResumeDown}
        alt="wave-about-resume-down"
        className="AboutResume__wave-down"
      />
    </div>
  )
}

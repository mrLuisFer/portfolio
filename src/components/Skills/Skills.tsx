// Assets
import WebsiteCreatorIllustration from '../../assets/website-creator-illustration.svg'
import ToolsSkillsIllustration from '../../assets/tools-skills.svg'

export default function Skiils(): JSX.Element {
  return (
    <div className='Skills'>
      <div>
        {/* Lenguages and Frameworks */}
        <div className='Skills__sections'>
          <p className='Skills__title'>
            <i className='fas fa-angle-double-right' />
            <span>Lenguages & Frameworks:</span>
          </p>
          <div className='Skills__flex'>
            <div className='Skills__cards-container'>
              <div>
                <span className='devicons devicons-html5' />
                <p>HTML5</p>
              </div>
              <div>
                <span className='devicons devicons-css3' />
                <p>CSS</p>
              </div>
              <div>
                <span className='devicons devicons-javascript_badge' />
                <p>Javascript</p>
              </div>
              <div>
                <i className='fab fa-react' />
                <p>React</p>
              </div>
              <div>
                <span className='devicons devicons-nodejs_small' />
                <p>NodeJs</p>
              </div>
              <div>
                <span className='devicons devicons-sass' />
                <p>Sass</p>
              </div>
              <div>
                <span className='devicons devicons-bootstrap' />
                <p>Bootstrap</p>
              </div>
              <div>
                <span className='devicons devicons-python' />
                <p>Python</p>
              </div>
              <div>
                <i className='devicon-gatsby-plain' />
                <p>Gatsby</p>
              </div>
              <div>
                <i className='devicon-materialui-plain' />
                <p>Material UI</p>
              </div>
              <div>
                <i className='devicon-typescript-plain' />
                <p>TypeScript</p>
              </div>
              <div>
                <i className='devicon-babel-plain' />
                <p>Babel</p>
              </div>
              <div>
                <i className='devicon-redux-original' />
                <p>Redux</p>
              </div>
            </div>
            <img
              className='Skills__illustration'
              src={WebsiteCreatorIllustration}
              alt='website-creator-illustration'
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className='Skills__sections Skills__text-right'>
          <p className='Skills__title'>
            <i className='fas fa-angle-double-right' />
            <span>Tools:</span>
          </p>
          <div className='Skills__flex'>
            <img
              className='Skills__illustration'
              src={ToolsSkillsIllustration}
              alt='tool-skills-illustration'
            />
            <div className='Skills__cards-container Skills__flex-end'>
              <div>
                <i className='devicon-github-original' />
                <p>Github</p>
              </div>
              <div>
                <i className='devicon-git-plain' />
                <p>Git</p>
              </div>
              <div>
                <i className='devicon-linux-plain' />
                <p>Linux</p>
              </div>
              <div>
                <i className='devicon-trello-plain' />
                <p>Trello</p>
              </div>
              <div>
                <i className='devicon-ubuntu-plain' />
                <p>Ubuntu</p>
              </div>
              <div>
                <i className='devicon-webstorm-plain' />
                <p>WebStorm</p>
              </div>
              <div>
                <i className='devicon-yarn-plain' />
                <p>Yarn</p>
              </div>
              <div>
                <i className='fab fa-figma' />
                <p>Figma</p>
              </div>
              <div>
                <span className='devicons devicons-visualstudio' />
                <p>Visual Studio Code</p>
              </div>
              <div>
                <span className='devicons devicons-terminal' />
                <p>Terminal</p>
              </div>
              <div>
                <i className='devicon-vim-plain' />
                <p>Vim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

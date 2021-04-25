// Assets
import WebsiteCreatorIllustration from '../../assets/website-creator-illustration.svg'
import ToolsSkillsIllustration from '../../assets/tools-skills.svg'

import {
  SkillsStyled,
  SkillsSections,
  SkillsSectionsTwo,
  SkillsTitle,
  SkillsCardsContainer,
  SkillsCardsContainerTwo,
  SkillsIllustration,
  SkillsFlex,
} from './Skills.styles'

export default function Skiils(): JSX.Element {
  return (
    <SkillsStyled>
      <div>
        {/* Lenguages and Frameworks */}
        <SkillsSections>
          <SkillsTitle>
            <i className='fas fa-caret-right' />
            <span>Lenguages & Frameworks:</span>
          </SkillsTitle>
          <SkillsFlex>
            <SkillsCardsContainer>
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
            </SkillsCardsContainer>
            <SkillsIllustration
              src={WebsiteCreatorIllustration}
              alt='Website creator illustration'
            />
          </SkillsFlex>
        </SkillsSections>

        {/* Tools Section */}
        <SkillsSectionsTwo>
          <SkillsTitle>
            <i className='fas fa-caret-right' />
            <span>Tools:</span>
          </SkillsTitle>
          <SkillsFlex>
            <SkillsIllustration
              src={ToolsSkillsIllustration}
              alt='Tool skills illustration'
            />
            <SkillsCardsContainerTwo>
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
            </SkillsCardsContainerTwo>
          </SkillsFlex>
        </SkillsSectionsTwo>
      </div>
    </SkillsStyled>
  )
}

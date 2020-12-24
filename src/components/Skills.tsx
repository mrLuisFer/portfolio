import React from "react"
// Assets
import WebsiteCreatorIllustration from "../assets/website-creator-illustration.svg"
import ToolsSkillsIllustration from "../assets/tools-skills.svg"

export default function Skiils(): JSX.Element {
  return (
    <div className="Skills">
      <div>
        {/* Lenguages and Frameworks */}
        <div className="Skills__sections">
          <p className="Skills__title">
            <i className="fas fa-angle-double-right"></i>My{" "}
            <span>Lenguages & Frameworks:</span>
          </p>
          <div className="Skills__flex">
            <div className="Skills__cards-container">
              <div>
                <span className="devicons devicons-html5"></span>
                <p>HTML5</p>
              </div>
              <div>
                <span className="devicons devicons-css3"></span>
                <p>CSS</p>
              </div>
              <div>
                <span className="devicons devicons-javascript_badge"></span>
                <p>Javascript</p>
              </div>
              <div>
                <i className="fab fa-react"></i>
                <p>ReactJs</p>
              </div>
              <div>
                <span className="devicons devicons-nodejs_small"></span>
                <p>NodeJs</p>
              </div>
              <div>
                <span className="devicons devicons-sass"></span>
                <p>Sass</p>
              </div>
              <div>
                <span className="devicons devicons-bootstrap"></span>
                <p>Bootstrap</p>
              </div>
              <div>
                <span className="devicons devicons-python"></span>
                <p>Python</p>
              </div>
              <div>
                <i className="devicon-gatsby-plain"></i>
                <p>Gatsby</p>
              </div>
              <div>
                <i className="devicon-materialui-plain"></i>
                <p>Material UI</p>
              </div>
              <div>
                <i className="devicon-typescript-plain"></i>
                <p>TypeScript</p>
              </div>
              <div>
                <i className="devicon-babel-plain"></i>
                <p>Babel</p>
              </div>
              <div>
                <i className="devicon-redux-original"></i>
                <p>Redux</p>
              </div>
            </div>
            <img
              className="Skills__illustration"
              src={WebsiteCreatorIllustration}
              alt="website-creator-illustration"
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="Skills__sections Skills__text-right">
          <p className="Skills__title">
            <i className="fas fa-angle-double-right"></i>My <span>Tools:</span>
          </p>
          <div className="Skills__flex">
            <img
              className="Skills__illustration"
              src={ToolsSkillsIllustration}
              alt="tool-skills-illustration"
            />
            <div className="Skills__cards-container Skills__flex-end">
              <div>
                <i className="devicon-github-original"></i>
                <p>Github</p>
              </div>
              <div>
                <i className="devicon-git-plain"></i>
                <p>Git</p>
              </div>
              <div>
                <i className="devicon-linux-plain"></i>
                <p>Linux</p>
              </div>
              <div>
                <i className="devicon-trello-plain"></i>
                <p>Trello</p>
              </div>
              <div>
                <i className="devicon-ubuntu-plain"></i>
                <p>Ubuntu</p>
              </div>
              <div>
                <i className="devicon-webstorm-plain"></i>
                <p>WebStorm</p>
              </div>
              <div>
                <i className="devicon-yarn-plain"></i>
                <p>Yarn</p>
              </div>
              <div>
                <i className="fab fa-figma"></i>
                <p>Figma</p>
              </div>
              <div>
                <span className="devicons devicons-visualstudio"></span>
                <p>Visual Studio Code</p>
              </div>
              <div>
                <span className="devicons devicons-terminal"></span>
                <p>Terminal</p>
              </div>
              <div>
                <i className="devicon-vim-plain"></i>
                <p>Vim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

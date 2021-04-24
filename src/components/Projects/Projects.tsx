// Hooks
import { ProjectsStyled, ProjectsFlex, ProjectsTitle } from './Projects.styles'

import '../../styles/components/Loaders/loader.css'

// In this component will be the call to the github api
export default function Projects(): JSX.Element {
  const status: string = ''

  return status === 'fetching' ? (
    <div className='loader'>Loading...</div>
  ) : (
    // Projects Section
    <ProjectsStyled id='projects'>
      <ProjectsFlex>
        <ProjectsTitle>
          <i className='fas fa-angle-double-right' />
          <span>Projects:</span>
        </ProjectsTitle>
      </ProjectsFlex>
      <div>
        <p>Seom</p>
      </div>
    </ProjectsStyled>
  )
}

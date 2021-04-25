// Hooks
import { ProjectsStyled, ProjectsTitle } from './Projects.styles'

import '../../../styles/components/Loaders/loader.css'

// In this component will be the call to the github api
export default function Projects(): JSX.Element {
  const status: string = ''

  return status === 'fetching' ? (
    <div className='loader'>Loading...</div>
  ) : (
    // Projects Section
    <ProjectsStyled id='projects'>
      <ProjectsTitle>Projects</ProjectsTitle>
    </ProjectsStyled>
  )
}

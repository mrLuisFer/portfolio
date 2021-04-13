// Hooks
import { useFetch } from '../../hooks/useFetch'
import {
  ProjectsStyled,
  ProjectsFlex,
  ProjectsTitle,
  ProjectsGrid,
} from './Projects.styles'

import '../../styles/components/Loaders/loader.css'

import ProjectsCard from './ProjectsCard/ProjectsCard'

// In this component will be the call to the github api
export default function Projects(): JSX.Element {
  const url: string = 'https://api.github.com/users/mrLuisFer/repos'
  const { status, data } = useFetch(url)

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
      <ProjectsGrid>
        {/* The cards of the data */}
        {data.map((project: any) => (
          <ProjectsCard project={project} key={project?.id} />
        ))}
      </ProjectsGrid>
    </ProjectsStyled>
  )
}

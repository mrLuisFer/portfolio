// Hooks
import CardTitle from '../CardsTitle/CardTitle'
import ProjectsCard from './ProjectsCard/ProjectsCard'
import { projectsData } from './ProjectsData'

import { ProjectsStyled } from './Projects.styles'

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <div>
        {projectsData.map((projects) => (
          <ProjectsCard
            title={projects.title}
            key={projects.title}
            repoUrl={projects.link}
            previewUrl={projects.preview}
            description={projects.description}
            contributors={projects.contributors}
          />
        ))}
      </div>
    </ProjectsStyled>
  )
}

import { useGetProjects } from 'src/hooks/useGetProjects'

import { ProjectsStyled, ProjectsFlex } from './Projects.styles'
import ProjectCard from './ProjectCard'
import CardTitle from '../CardsTitle/CardTitle'

export default function Projects(): JSX.Element {
  const { projects, requestStatus } = useGetProjects()

  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <section>
        {requestStatus !== 200 ? (
          <div>
            <h1>An error fetching data</h1>
          </div>
        ) : (
          <ProjectsFlex>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectsFlex>
        )}
      </section>
    </ProjectsStyled>
  )
}

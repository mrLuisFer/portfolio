import type { ProjectData } from '../projects'
import { ProjectCardContainer, GithubIcon, Title } from './ProjectCard.styles'

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <ProjectCardContainer>
      <GithubIcon className='fab fa-github' />
      <div>
        <div>
          <Title>{project.name}</Title>
          <p>{project.description}</p>
        </div>
        <div>
          <p>
            Language: <span>{project.language}</span>
          </p>
          <p>
            Date: <span>{project.created_at}</span>
          </p>
          <p>
            Latest commit: <span>{project.pushed_at}</span>
          </p>
        </div>
      </div>
    </ProjectCardContainer>
  )
}

import { TProjects } from '../projects.d'

import {
  ProjectsCardContainer,
  ProjectsCardContributorsTitle,
  ProjectsCardDescription,
  ProjectsCardTitle,
  ProjectsCardTitleIcon,
  ProjectsCardUrl,
  ProjectsCardUrlIcon,
  ProjectsCardUrlIconContainer,
} from './ProjectsCard.styles'

export default function ProjectsCard({
  contributors = [],
  description,
  preview = '',
  repo,
  title,
}: TProjects): JSX.Element {
  const handleUrlOnClick = (url: string = '/') => {
    window.open(url, '_blank')
  }

  return (
    <ProjectsCardContainer className='ProjectsCardContainer'>
      <div onClick={() => handleUrlOnClick(repo)} aria-hidden>
        <ProjectsCardTitle>
          <ProjectsCardTitleIcon className='fas fa-file-code' title={`${title}-icon`} />
          {title}
        </ProjectsCardTitle>
        <ProjectsCardDescription>{description}</ProjectsCardDescription>
        <ProjectsCardContributorsTitle>Contributors:</ProjectsCardContributorsTitle>
        {contributors.map((contributor) => (
          <p key={contributor}>{contributor}</p>
        ))}
      </div>
      <ProjectsCardUrlIconContainer>
        {repo.length > 4 && (
          <ProjectsCardUrl href={repo} target='_blank' rel='noopener noreferrer'>
            <ProjectsCardUrlIcon className='fab fa-github' title={`Repo: ${repo}`} />
          </ProjectsCardUrl>
        )}
        {preview.length > 4 && (
          <ProjectsCardUrl href={preview} target='_blank' rel='noopener noreferrer'>
            <ProjectsCardUrlIcon
              className='fas fa-external-link-alt'
              title={`Demo ${preview}`}
            />
          </ProjectsCardUrl>
        )}
      </ProjectsCardUrlIconContainer>
    </ProjectsCardContainer>
  )
}

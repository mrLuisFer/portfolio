import React from 'react'
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
  return (
    <ProjectsCardContainer>
      <ProjectsCardTitle>
        <ProjectsCardTitleIcon className='fas fa-file-code' title={`${title}-icon`} />
        {title}
      </ProjectsCardTitle>
      <ProjectsCardDescription>{description}</ProjectsCardDescription>
      <div>
        <ProjectsCardContributorsTitle>Contributors:</ProjectsCardContributorsTitle>
        {contributors.map((contributor) => (
          <p key={contributor}>{contributor}</p>
        ))}
      </div>
      <ProjectsCardUrlIconContainer>
        {repo.length > 4 ? (
          <ProjectsCardUrl href={repo}>
            <ProjectsCardUrlIcon className='fab fa-github' title='github-icon' />
          </ProjectsCardUrl>
        ) : (
          ''
        )}
        {preview.length > 4 ? (
          <ProjectsCardUrl href={preview}>preview</ProjectsCardUrl>
        ) : (
          ''
        )}
      </ProjectsCardUrlIconContainer>
    </ProjectsCardContainer>
  )
}

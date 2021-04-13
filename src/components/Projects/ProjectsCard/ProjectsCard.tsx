import React from 'react'
// Functions
import truncate from '../../../functions/truncate'
import {
  ProjectCardAnchor,
  ProjectCardAnchorIcon,
  ProjectCardAnchorSpan,
  ProjectCardContainer,
  ProjectCardDateText,
  ProjectCardDescription,
  ProjectCardTitle,
  ProjectCardDateIcon,
  ProjectCardLang,
  ProjectsCardLangIcon,
} from './PojectCard.styles'

export default function ProjectsCard({ project }: any): JSX.Element {
  const windowWidth: number = window.innerWidth
  let length: number = 0

  if (windowWidth <= 375) {
    length = 170
  } else if (windowWidth >= 375) {
    length = 160
  }

  return (
    <ProjectCardContainer key={project?.id}>
      <ProjectCardTitle>{project?.name}</ProjectCardTitle>
      <ProjectCardDescription>
        {truncate(project?.description, length)}
      </ProjectCardDescription>
      <ProjectCardAnchor
        href={project?.html_url}
        target='_blank'
        rel='noopener noreferrer'>
        <ProjectCardAnchorIcon className='fab fa-github-alt' />{' '}
        <ProjectCardAnchorSpan>{project?.full_name}</ProjectCardAnchorSpan>
      </ProjectCardAnchor>
      <br />
      <ProjectCardDateText>
        <ProjectCardDateIcon className='far fa-calendar-alt' />{' '}
        {new Date(`${project.created_at}`).toDateString()}
      </ProjectCardDateText>
      <br />
      {project?.language?.length > 1 ? (
        <ProjectCardLang>
          <ProjectsCardLangIcon className='fas fa-file-code' />
          {project?.language}
        </ProjectCardLang>
      ) : (
        ''
      )}
    </ProjectCardContainer>
  )
}

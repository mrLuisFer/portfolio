// Hooks
import CardTitle from '../CardsTitle/CardTitle'
import ProjectsCard from './ProjectsCard/ProjectsCard'

import { ProjectsStyled } from './Projects.styles'

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <div>
        <ProjectsCard />
      </div>
    </ProjectsStyled>
  )
}

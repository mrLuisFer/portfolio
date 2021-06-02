// Hooks
import CardTitle from '../CardsTitle/CardTitle'
import { ProjectsStyled } from './Projects.styles'

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <div>
        <p>Some project</p>
      </div>
    </ProjectsStyled>
  )
}

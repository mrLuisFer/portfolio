// Hooks
import CardTitle from '../CardsTitle/CardTitle'
import { ProjectsStyled } from './Projects.styles'

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyled id='projects'>
      <CardTitle title='Projects:' marginBottom='2rem' withMarginBottom />
      <div />
    </ProjectsStyled>
  )
}

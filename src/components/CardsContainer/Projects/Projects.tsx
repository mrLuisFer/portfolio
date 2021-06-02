// Hooks
import CardTitle from '../CardsTitle/CardTitle'
import { ProjectsStyled } from './Projects.styles'

export default function Projects(): JSX.Element {
  return (
    <ProjectsStyled id='projects'>
      <CardTitle titleSpan='Projects:' marginBottom='2rem' withMarginBottom />
      <div>
        <div>
          <h1>Some title</h1>
          <p>Description</p>
          <div>
            <a href='/'>Repo</a>
            <a href='/'>preview</a>
          </div>
        </div>
      </div>
    </ProjectsStyled>
  )
}

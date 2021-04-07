// Components
import CardsContainer from '../CardsContainer/CardsContainer'
import { SListWorksSkills, ListWorksSkillsTitle } from './ListWorksSkills.styles'

export default function ListWorksSkills(): JSX.Element {
  return (
    <SListWorksSkills id='portfolio'>
      {/* It is inside a div for in case it is necessary to put a background with an illustration */}
      <div className='LisWorksSkills__div'>
        <ListWorksSkillsTitle>
          <span>Portfolio</span>
        </ListWorksSkillsTitle>
        {/* Routes to navigate in the list of skills, projects and what I do */}
        <CardsContainer />
      </div>
    </SListWorksSkills>
  )
}

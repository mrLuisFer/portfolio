import styled from 'styled-components'
import { lineUnderText } from '../../styles/mixins/lineUnderText'
import { ipad } from '../../styles/screens'

const SListWorksSkills = styled.div`
  padding: 0 5%;
  color: var(--dark-gray);
  margin-bottom: 1rem;

  @media (min-width: ${ipad}) {
    padding: 0 10%;
  }
`

const ListWorksSkillsTitle = styled.h2`
  position: relative;
  font-family: var(--inter-font);
  display: inline-block;
  margin-bottom: 2rem;
  font-size: 1.9rem;

  @media (min-width: ${ipad}) {
    font-size: 2.45rem;
  }

  ${lineUnderText(
    'var(--command-blue)',
    'var(--cerulean-crayola)',
    '50%',
    '7px',
    '0',
    '5px',
    0.4
  )}

  span {
    color: var(--true-blue);
  }
`

export { SListWorksSkills, ListWorksSkillsTitle }

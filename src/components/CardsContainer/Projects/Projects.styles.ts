import styled from 'styled-components'
import { large } from '../../../styles/screens'
import { titleStyle } from '../../../styles/mixins/titleStyle'

export const ProjectsStyled = styled.div`
  margin: 5rem 0;

  @media (min-width: ${large}) {
    margin: 7rem 0;
  }
`

export const ProjectsFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const ProjectsTitle = styled.h1`
  ${titleStyle}
  margin-bottom: 0;
`

import styled from 'styled-components'
import { ipad, large } from '../../styles/screens'
import { titleStyle } from '../../styles/mixins/titleStyle'

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

export const ProjectsGrid = styled.div`
  @media (min-width: ${ipad}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.5rem;
    row-gap: 4.5rem;
    color: var(--gainsboro);
  }

  @media (min-width: ${large}) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`

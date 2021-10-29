import styled from 'styled-components'
import { large } from 'src/styles/screens'

export const ProjectsStyled = styled.div`
  margin: 5rem 0;

  @media (min-width: ${large}) {
    margin: 7rem 0;
  }
`

export const ProjectsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

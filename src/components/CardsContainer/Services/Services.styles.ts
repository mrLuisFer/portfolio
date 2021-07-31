import styled from 'styled-components'
import { ipad } from 'src/styles/screens'

export const ServicesStyled = styled.div`
  margin-top: 3rem;
`

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem 1.5rem;

  @media (min-width: ${ipad}) {
    align-items: flex-start;
    gap: 3rem 1.5rem;
  }
`

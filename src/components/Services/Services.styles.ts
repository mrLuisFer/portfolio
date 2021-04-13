import styled from 'styled-components'
import { ipad } from '../../styles/screens'
import { titleStyle } from '../../styles/mixins/titleStyle'

export const ServicesTitle = styled.h2`
  ${titleStyle}
  margin-bottom: 2rem;
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

import styled from 'styled-components'
import { ipad, large } from '../styles/screens'

export const AppStyled = styled.div`
  padding-top: 10px;
  height: 100vh;
  margin: 0 auto;
  max-width: 1900px;

  @media (min-width: ${ipad}) {
    padding-top: 1rem;
  }

  @media (min-width: ${large}) {
    padding-top: 1.5rem;
  }
`

export const WavePattern = styled.img`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  left: 0;
  opacity: 0.3;
  z-index: -1000;
  top: 0;
  @media (min-width: ${large}) {
    top: -3rem;
  }
`

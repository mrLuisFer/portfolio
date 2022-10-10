import styled from 'styled-components'
import { ipad, large } from 'src/styles/screens'
import Image from 'next/image'

const Title = styled.h1`
  text-align: center;
  margin: 0.5rem 0;
  font-weight: 700;
`

export const TitleMobile = styled(Title)`
  display: block;
  @media (min-width: ${ipad}) {
    display: none;
  }
`

export const TitleDesktop = styled(Title)`
  display: none;
  @media (min-width: ${ipad}) {
    display: block;
    font-size: 2.5rem;
  }

  @media (min-width: ${large}) {
    font-size: 3rem;
  }
`

export const ErrorImg = styled(Image)`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 350px;

  @media (min-width: ${ipad}) {
    width: 20rem;
    margin: 0;
  }

  @media (min-width: ${large}) {
    width: 30rem;
  }
`

export const ErrorTxt = styled.p`
  text-align: center;
  font-weight: 600;

  @media (min-width: ${ipad}) {
    font-size: 1rem;
  }

  @media (min-width: ${large}) {
    font-size: 1.5rem;
  }

  span {
    color: var(--usafa-blue);
  }
`

export const ErrorBtn = styled.button`
  border-radius: var(--radius);
  border: none;
  box-shadow: 0.2px 0.5px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: block;
  font-weight: 600;
  margin: 2rem auto;
  outline: none;
  padding: 1rem;
  position: relative;
  transition: var(--transition);

  &:hover {
    box-shadow: 0.2px 1px 5px rgba(0, 0, 0, 0.3);
    background: var(--usafa-blue);
    color: var(--cultured);
  }
`

export const ErrorContainer = styled.div`
  display: block;

  @media (min-width: ${ipad}) {
    align-items: center;
    column-gap: 3rem;
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${large}) {
    column-gap: 4rem;
  }
`

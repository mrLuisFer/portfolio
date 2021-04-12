import styled from 'styled-components'
import { ipad, large } from '../../../styles/screens'
import { noSelect } from '../../../styles/noSelect'
import { fontWeight } from '../../../styles/fontWeight'

export const ServicesHtmlCard = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid rgba(0, 0, 0, 0);
  border-radius: var(--radius);
  height: auto;
  padding: 1rem;
  transition: var(--transition);
  color: var(--dark-gray);
  margin: 0 auto;
  width: 340px;

  @media (min-width: ${ipad}) {
    width: 420px;
  }

  @media (min-width: ${large}) {
    width: auto;
    margin: 0;
  }
`

export const ServicesHtmlCardIcon = styled.span`
  border-radius: var(--radius);
  box-shadow: 0.3px 0.3px 4px var(--shadow-color);
  transition: var(--transition);
  text-align: center;
  height: auto;
  width: 60px;
  padding: 0.8rem;
  font-size: 1.9rem;

  &:hover {
    transform: scale(1.08);
  }
`

export const ServicesHtmlCardContent = styled.div`
  margin-left: 1rem;
`

export const ServicesHtmlCardContentTitle = styled.h1`
  font-size: 1.3rem;
  font-family: var(--inter-font);
  color: var(--oxford-blue);
  font-weight: 400;
  position: relative;
  margin: 0;
  margin-bottom: 0.4rem;
  transition: var(--transition);
  cursor: pointer;
  display: flex;
  align-items: center;

  ${noSelect}

  ${fontWeight('var(--powder-blue)')}

  &:hover {
    text-decoration: underline;
  }

  span {
    i {
      margin-right: 0.5rem;
    }
  }
`

export const ServicesHtmlCardContentText = styled.p`
  font-family: var(--open-sans-font);
  line-height: 1.55;
  letter-spacing: 0.5px;
  position: relative;
  font-size: 0.9rem;

  &:hover {
    color: var(--cultured);
  }
`

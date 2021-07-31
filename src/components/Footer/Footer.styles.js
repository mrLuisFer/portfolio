import styled from 'styled-components'
import { fontWeight } from 'src/styles/mixins/fontWeight'
import { ipad, large, mobile } from 'src/styles/screens'

const SFooter = styled.div`
  background: var(--blue-background);
  margin-top: 3rem;
  color: var(--cultured);
  position: relative;
  height: auto;
  padding: 2rem 0;
  padding-top: 9.5rem;

  @media (min-width: ${ipad}) {
    padding: 2rem 5%;
    padding-top: 11rem;
    margin-top: 5rem;
  }

  @media (min-width: ${large}) {
    padding: 2rem 10%;
    padding-top: 18rem;
  }
`

const FooterWave = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  background: var(--cultured);
  padding-bottom: -0rem;
  backface-visibility: hidden;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${mobile}) {
    flex-direction: row;
  }

  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;

  @media (min-width: ${ipad}) {
    justify-content: space-around;
  }

  @media (min-width: ${large}) {
    justify-content: space-evenly;
  }
`

const FooterContainerCard = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;

  @media (min-width: ${ipad}) {
    text-align: left;
  }

  a {
    display: block;
    text-decoration: none;
    font-family: var(--inter-font);
    color: var(--light-gray);
    margin-bottom: 1rem;

    span {
      font-weight: 300;

      ${fontWeight('var(--light-gray)', '0s')}

      &:hover {
        color: var(--gainsboro);
        text-decoration: underline;
      }
    }

    i {
      display: inline-block;
      font-size: 1.2rem;
      margin-right: 0.5rem;
      text-align: left;
    }
  }
`

const FooterContainerCardAnchor = styled.a`
  i {
    margin-right: 0.5rem;
    font-size: 1.25rem;
  }
`

const FooterContainerCardTitle = styled.h2`
  position: relative;
  margin-bottom: 1rem;
  font-family: var(--inter-font);
  font-weight: 600;

  &::after {
    content: ' ';
    width: 25%;
    height: 0.2rem;
    background: var(--light-gray);
    position: absolute;
    left: 0;
    bottom: -3px;
    border-radius: 2px;
  }
`
const FooterContainerIllustration = styled.img`
  margin: 0 auto;
  width: 250px;
  transition: var(--transition);

  @media (min-width: ${mobile}) {
    margin: 0;
  }

  @media (min-width: ${ipad}) {
    width: 350px;
    height: 350px;
  }

  @media (min-width: ${large}) {
    width: 400px;
    height: 350px;
    margin-right: -5rem;
  }
`

const FooterMade = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: var(--powder-blue);
  transition: var(--transition);

  i {
    margin: 0 0.5rem;
    transition: var(--transition);
  }

  a {
    margin: 0 0.5rem;
    font-family: var(--inter-font);
    transition: var(--transition);
    color: var(--powder-blue);
    text-decoration: none;
  }

  &:hover {
    color: var(--cultured);

    i {
      color: var(--green);
      font-size: 1.1rem;
    }

    a {
      text-decoration: underline;
    }
  }
`

export {
  SFooter,
  FooterWave,
  FooterContainer,
  FooterContainerCard,
  FooterContainerCardTitle,
  FooterContainerCardAnchor,
  FooterContainerIllustration,
  FooterMade,
}

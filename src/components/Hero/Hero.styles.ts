import styled, { css } from 'styled-components'
import { ipad, large, mobile } from '../../styles/screens'
import { lineUnderText } from '../../styles/mixins/lineUnderText'
import { noSelect } from '../../styles/mixins/noSelect'

export const HeroStyled = styled.div`
  margin-bottom: 7rem;

  @media (min-width: ${ipad}) {
    display: flex;
    justify-content: space-evenly;
    column-gap: 1rem;
  }

  @media (min-width: ${large}) {
    align-items: center;
    margin-bottom: 10rem;
    column-gap: 0;
    justify-content: space-evenly;
  }
`

export const HeroIllustration = styled.img`
  width: 290px;
  height: 220px;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: block;

  @media (min-width: ${mobile}) {
    width: 100%;
  }

  ${noSelect}

  @media (min-width: ${ipad}) {
    margin: 0;
    width: 280px;
    height: 250px;
  }

  @media (min-width: ${large}) {
    height: 450px;
    width: 450px;
  }
`

export const HeroPersonal = styled.div`
  margin-bottom: 2rem;
  padding: 0 10%;

  @media (min-width: ${ipad}) {
    margin-bottom: 1.5rem;
    padding: 0;
  }
`

export const HeroPersonalGreet = styled.span`
  display: block;
  color: var(--state-gray);
  margin: 0;
  font-weight: 300;
  font-size: 2rem;

  @media (min-width: ${ipad}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${large}) {
    font-size: 2rem;
  }
`

export const HeroPersonalTitle = styled.h1`
  font-size: 1.8rem;
  font-family: var(--inter-font);
  font-weight: 600;

  @media (min-width: ${mobile}) {
    font-size: 2rem;
  }

  @media (min-width: ${ipad}) {
    font-size: 2.1rem;
  }

  @media (min-width: ${large}) {
    font-size: 3rem;
  }
`

export const HeroPersonalName = styled.span`
  color: var(--true-blue);
  font-weight: 700;
  letter-spacing: 1.1px;
  position: relative;
  transition: color var(--transition);

  @media (min-width: ${mobile}) {
    margin-right: 0.5rem;
  }

  &:hover {
    color: var(--blue-background);
  }

  ${lineUnderText(
    'var(--blue-background)',
    'var(--true-blue)',
    '50%',
    '7px',
    '0px',
    '8px',
    0.4
  )}
`

export const HeroPersonalCodeIcon = styled.i`
  color: var(--beau-blue);
  font-size: 1.5rem;

  @media (min-width: ${large}) {
    font-size: 2rem;
    transition: var(--transition);
  }

  &:hover {
    opacity: 0.6;
    color: var(--cerulean-blue);
  }
`

export const HeroPersonalInfo = styled.h2`
  margin-top: 1.35rem;
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: 400;

  @media (min-width: ${mobile}) {
    padding-right: 3rem;
  }

  @media (min-width: ${ipad}) {
    padding-right: 0;
    width: 280px;
    line-height: 1.3;
    font-size: 1.3rem;
  }

  @media (min-width: ${large}) {
    line-height: 1.44;
    width: 300px;
    font-size: 1.65rem;
  }

  span {
    color: var(--rich-black);
    font-weight: 600;

    span {
      // color: var(--true-blue);
      color: var(--usafa-blue);
      font-weight: 700;
    }
  }

  #Hero__personal-info-js {
    color: var(--honey-yellow);
  }
`

export const HeroLinks = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  justify-content: center;

  @media (min-width: ${mobile}) {
    column-gap: 1rem;
  }

  @media (min-width: ${ipad}) {
    justify-content: flex-start;
    column-gap: normal;
  }
`

export const HeroLinksAnchor = css`
  font-size: 1.5rem;
  transition: var(--transition);
  color: var(--oxford-dark-blue);
  font-family: var(--inter-font);
  position: relative;

  @media (min-width: ${ipad}) {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  @media (min-width: ${large}) {
    font-size: 1.5rem;
  }

  &:hover {
    color: var(--blue-background);
    transform: scale(1.05);
  }
`

export const HeroLinksLinkedin = styled.a`
  ${HeroLinksAnchor}
  position: relative;

  &:hover {
    color: var(--linkedin-color);
  }
`

export const HeroLinksGithub = styled.a`
  ${HeroLinksAnchor}
  position: relative;

  &:hover {
    color: var(--github-color);
  }
`

export const HeroLinksAbout = styled.a`
  background: var(--blue);
  border-radius: var(--radius);
  font-size: 0.8rem;
  color: var(--light-gray);
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  padding: 0.7rem;

  @media (min-width: ${ipad}) {
    padding: 0.6rem;
  }

  @media (min-width: ${large}) {
    font-size: 1rem;
    padding: 0.6rem 0.8rem;
  }

  i {
    font-size: 0.9rem;
    margin-right: 0.2rem;

    @media (min-width: ${ipad}) {
      font-size: 0.8rem;
    }
  }

  &:hover {
    filter: brightness(1.1);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`

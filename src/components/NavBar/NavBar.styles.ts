import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { ipad, large } from '../../styles/screens'
import { lineUnderText } from '../../styles/mixins/lineUnderText'
import { noSelect } from '../../styles/mixins/noSelect'

export const NavBarStyled = styled.nav`
  padding: 0 40px;
  margin-bottom: 3rem;

  @media (min-width: ${ipad}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
  }
`

export const NavBarLogo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export const NavBarLogoTitle = styled.h1`
  @media (min-width: ${ipad}) {
    align-items: center;
    margin: 0;
    justify-content: none;
  }

  img {
    width: 40px;
    margin-right: 0.1rem;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-family: var(--inter-font);
    color: var(--rich-black);
    font-size: 1.3rem;

    @media (min-width: ${ipad}) {
      position: relative;
    }

    ${noSelect}

    ${lineUnderText(
      'var(--command-blue)',
      'var(--true-blue)',
      '90%',
      '7px',
      '0px',
      '0px',
      0.4
    )}
  }
`

export const NavBarLinks = styled.div`
  text-align: center;

  @media (min-width: ${ipad}) {
    display: flex;
    align-items: center;
  }
`

export const NavBarSocialMedia = styled.div`
  display: none;

  @media (min-width: ${ipad}) {
    display: flex;
    align-items: center;
    color: var(--beau-blue);
    font-family: var(--inter-font);

    img {
      width: 0.8rem;
      height: 0.8rem;
      margin-right: 0.2rem;
      transition: all 0.3s ease;
    }
  }
`

export const NavBarSocialMediaSpan: any = styled.p`
  background: var(--blue);
  margin-left: 0.9rem;
  padding-right: 0.4rem;
  border-radius: var(--radius) 0 0 var(--radius);
  padding: 0.4rem 0.6rem;
  height: 2rem;
  cursor: pointer;

  ${noSelect}

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;

  transition: border-radius 0s ease;

  @media (min-width: ${large}) {
    padding: 0.4rem 0.6rem;
  }

  &:hover {
    color: var(--light-gray);
    text-shadow: -0.2px -0.2px 0 var(--light-gray), 0.2px -0.2px 0 var(--light-gray),
      -0.2px 0.2px 0 var(--light-gray), 0.2px 0.2px 0 var(--light-gray);

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    transition: border-radius 0s ease;
  }

  border-top-right-radius: ${(props: any) => (props.showIns ? '' : '7px')};
  border-bottom-right-radius: ${(props: any) => (props.showIns ? '' : '7px')};
`

export const NavBarSocialMediaIcons = styled.div`
  background: var(--blue);
  background: linear-gradient(270deg, rgba(4, 102, 200, 1) 30%, rgba(3, 83, 164, 1) 95%);
  padding-left: 0;
  border-radius: 0 7px 7px 0;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  height: 2rem;
`

export const NavBarSocialMediaIconsAnchors = styled.div`
  a {
    &:hover {
      color: var(--light-gray);
    }
  }
`

export const IconToRotate: any = styled.i`
  transition: ${(props: any) => (props.showIns ? 'all 0.3s ease' : '')};
  transform: ${(props: any) => (props.showIns ? 'rotate(180deg)' : '')};

  margin-right: 0.5rem;
`

const linkAndAnchorStyles = css`
  margin: 0 0.9rem;
  text-decoration: none;
  color: var(--oxford-blue);
  font-family: var(--inter-font);
  border-bottom: 2px solid rgba(0, 0, 0, 0);

  ${noSelect}

  @media (min-width: ${ipad}) {
    margin: 0;
    margin-left: 0.9rem;
    transition: var(--transition);
    font-size: 0.9rem;
  }

  @media (min-width: ${large}) {
    font-size: 1.2rem;
    margin-left: 1.2rem;
  }

  &:hover {
    color: var(--oxford-dark-blue);
    border-bottom: 2px solid var(--oxford-blue);
    transform: scale(1.05);

    @media (min-width: ${ipad}) {
      transform: scale(1.1);
    }
  }
`

export const NavBarLink = styled(Link)`
  ${linkAndAnchorStyles}
`

export const NavBarSocialMediaIconsAnchor = styled.a`
  ${linkAndAnchorStyles}
  position: relative;
`

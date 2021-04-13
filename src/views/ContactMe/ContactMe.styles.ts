import styled from 'styled-components'
import { ipad, large } from '../../styles/screens'
import { lineUnderText } from '../../styles/mixins/lineUnderText'

export const ContactMeStyled = styled.div`
  padding: 0 5%;
  margin-bottom: 4rem;

  @media (min-width: ${large}) {
    margin-bottom: 20rem;
    padding: 0 10%;
  }
`

export const ContactMeTitle = styled.h1`
  position: relative;
  display: inline-block;
  margin: 1.5rem 0;

  ${lineUnderText(
    'var(--oxford-dark-blue)',
    'var(--true-blue)',
    '60%',
    '7px',
    '0',
    '0',
    0.7
  )}
`

export const ContactMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 6.6rem;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media (min-width: ${large}) {
    flex-direction: row;
  }
`
export const ContactMeSocialContainer = styled.div`
  background: var(--dark);
  padding: 2.3rem 1.6rem;
  padding-bottom: 0;
  height: 450px;
  width: 300px;
  border-radius: var(--radius);
  margin: 0 auto;

  @media (min-width: ${large}) {
    margin: 0;
    margin-left: 2rem;
  }
`

export const ContactMeSocialContainerTitle = styled.h4`
  text-align: center;
  color: var(--light-gray);
  font-size: 1.2rem;
  font-family: var(--open-sans-font);
  font-weight: 600;
  margin-bottom: 0.5rem;
`
export const ContactMeSocialLink = styled.a`
  display: block;
  text-decoration: none;
  color: var(--light-gray);
  text-align: center;
  font-family: var(--inter-font);
  font-weight: 300;
  padding: 1.6rem 0;
  font-size: 1.05rem;
  letter-spacing: 0.9px;
  border-bottom: 1.5px solid var(--state-gray);
  font-size: 1.1rem;

  &:nth-last-child(1) {
    margin-bottom: 0;
    border: none;
  }
`

export const ContactMeSocialIcon = styled.i`
  margin-right: 0.4rem;
  font-size: 1.2rem;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`

export const ContactMeSocialText = styled.span`
  &:hover {
    text-decoration: underline;
    color: var(--gainsboro);
  }
`
export const ContactMeIllustration = styled.img`
  transition: var(--transition);
  width: 300px;
  height: 260px;
  margin: 0 auto;

  @media (min-width: ${ipad}) {
    width: 370px;
    height: 300px;
  }

  @media (min-width: ${large}) {
    width: 500px;
    height: 500px;
  }

  &:hover {
    transform: scale(1.1);
  }
`
export const ContactMeFlex = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  padding: 0 5%;

  @media (min-width: ${ipad}) {
    flex-direction: row;
    padding: 0;
  }
`

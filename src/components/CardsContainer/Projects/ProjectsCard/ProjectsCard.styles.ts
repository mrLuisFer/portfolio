import styled from 'styled-components'
import { noSelect } from 'src/styles/mixins/noSelect'
import { mobile } from 'src/styles/screens'

export const ProjectsCardContainer = styled.article`
  display: block;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: var(--radius);
  transition: var(--transition);
  cursor: pointer;
  margin: 3rem 0;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover {
    box-shadow: 0.5px 0.5px 7px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${mobile}) {
    &:hover {
      transform: scale(1.02);
    }
  }
`
export const ProjectsCardTitle = styled.h1`
  font-size: 1.2rem;
  letter-spacing: 1px;
`

export const ProjectsCardTitleIcon = styled.i`
  font-size: 1.2rem;
  padding-right: 0.5rem;
`

export const ProjectsCardDescription = styled.p`
  text-align: left;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;
`

export const ProjectsCardContributorsTitle = styled.p`
  display: block;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.8;
`

export const ProjectsCardUrlIconContainer = styled.div`
  margin-top: 2rem;
`

export const ProjectsCardUrl = styled.a`
  text-decoration: none;
  color: var(--oxford-blue);
  transition: var(--transition);
  margin-right: 2rem;

  &:hover {
    color: var(--semi-purple);
  }
`

export const ProjectsCardUrlIcon = styled.i`
  font-size: 1.6rem;
  cursor: pointer;

  ${noSelect()};
`

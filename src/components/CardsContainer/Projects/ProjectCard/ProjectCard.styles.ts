import styled from 'styled-components'

export const ProjectCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e6e6e6;
  padding: 1rem;
  border-radius: 10px;
`

export const GithubIcon = styled.i`
  font-size: 2.5rem;
  margin-right: 1rem;
  transition: var(--transition);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

export const Flex = styled.div`
  display: flex;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  text-transform: capitalize;
`

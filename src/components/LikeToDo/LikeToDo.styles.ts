import styled from 'styled-components'
import { ipad, large } from '../../styles/screens'
import { lineUnderText } from '../../styles/mixins/lineUnderText'
import { noSelect } from '../../styles/mixins/noSelect'

export const SLikeToDo = styled.div`
  padding: 0 5%;
  margin-bottom: 5rem;

  @media (min-width: ${ipad}) {
    margin-bottom: 8rem;
    padding: 0 10%;
  }
`

export const LikeToDoTitle = styled.h2`
  font-family: var(--inter-font);
  font-weight: 700;
  position: relative;
  display: inline;
  font-size: 1.9rem;

  ${noSelect()}

  ${lineUnderText(
    'var(--command-blue)',
    'var(--cerulean-crayola)',
    '50%',
    '7px',
    '0px',
    '5px',
    0.4
  )}

  @media (min-width: ${ipad}) {
    font-size: 2.2rem;
  }

  span {
    color: var(--true-blue);
  }
`

export const LikeToDoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
  padding: 1rem 0;

  @media (min-width: ${ipad}) {
    justify-content: flex-start;
  }

  @media (min-width: ${large}) {
    justify-content: space-evenly;
  }
`

export const LikeToDoCard = styled.div`
  background: var(--beau-blue);
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d6087' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  color: var(--oxford-dark-blue);
  border-radius: var(--radius);
  text-align: center;
  padding: 0.7rem 1.5rem;
  transition: var(--transition);
  max-width: 130px;

  @media (min-width: ${ipad}) {
    padding: 1rem;
  }

  &:hover {
    transform: scale(1.1);
    background: var(--blue-background);
    color: var(--light-gray);
    box-shadow: 2px 2px 5px var(--shadow-color);
  }
`

export const LikeToDoCardIcon = styled.i`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;

  @media (min-width: ${ipad}) {
    margin-bottom: 0.8rem;
    font-size: 1.7rem;
  }
`

export const LikeTodoCardText = styled.p`
  font-family: var(--open-sans-font);
  font-weight: 600;
  letter-spacing: 0.1px;
  cursor: default;
  font-size: 0.7rem;

  @media (min-width: ${ipad}) {
    font-size: 0.9rem;
  }

  span {
    display: block;

    @media (min-width: ${ipad}) {
      display: inline-block;
    }
  }
`

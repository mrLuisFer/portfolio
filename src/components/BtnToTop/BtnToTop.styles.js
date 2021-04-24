import styled from 'styled-components'
import { ipad } from '../../styles/screens'

export const SBtnToTop = styled.button`
  position: sticky;
  bottom: 0;
  right: 0;
  height: 40px;
  margin-right: 1rem;
  margin-left: auto;
  margin-bottom: 0;
  padding: 0.5rem;
  padding-top: 0.55rem;
  display: flex;
  justify-content: flex-end;
  justify-self: end;
  text-align: right;
  cursor: pointer;

  border: none;
  outline: none;
  border: 2px solid var(--oxford-dark-blue);
  background: var(--true-blue);
  border-radius: var(--radius);
  color: var(--cultured);
  opacity: 0.7;

  @media (min-width: ${ipad}) {
    transition: var(--transition);

    &:hover {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`

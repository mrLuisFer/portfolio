import { CSSObject } from 'styled-components'
import { ipad, large } from '../screens'
import { lineUnderText } from './lineUnderText'

export const titleStyle: CSSObject | string = `
  margin-bottom: 1.5rem;
  display: inline-block;
  font-family: var(--inter-font);
  font-weight: 600;
  color: var(--dark-gray);
  font-size: 1.2rem;
  position: relative;
  
  @media (min-width: ${ipad}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${large}) {
    font-size: 1.5rem;
  }

  ${lineUnderText(
    'var(--oxford-blue)',
    'var(--true-blue)',
    '50%',
    '3px',
    '0',
    '-3px',
    0.97
  )}

  &:hover {
    color: var(--oxford-blue);

    span {
      color: var(--oxford-blue);
    }
  }

  i {
    margin-right: 0.2rem;
  }

  span {
    transition: var(--transition);
    color: var(--true-blue);
  }
  `

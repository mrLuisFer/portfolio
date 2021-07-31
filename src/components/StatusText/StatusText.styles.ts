import styled from 'styled-components'
import { large } from '../../styles/screens'

export const StatusTextStyled = styled.div`
  display: block;
`

export const StatusTextDescription = styled.p`
  font-size: 1.1rem;
  margin-top: 2rem;
  text-align: center;
  font-weight: 600;

  @media (min-width: ${large}) {
    text-align: left;
  }
`

export const StatusTextDescriptionIcon = styled.i`
  margin-right: 0.5rem;
`

type StatusTextSpanProps = {
  statusError: Boolean
}
export const StatusTextSpan: any = styled.span<StatusTextSpanProps>`
  color: ${(props) => (props.statusError ? 'var(--orange)' : ' var(--cerulean-crayola)')};
`

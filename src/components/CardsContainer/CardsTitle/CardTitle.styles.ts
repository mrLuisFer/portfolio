import styled from 'styled-components'
import { titleStyle } from 'src/styles/mixins/titleStyle'

type CardTitleStyledProps = {
  marginBottom?: string
}
export const CardTitleStyled = styled.h2<CardTitleStyledProps>`
  ${titleStyle}

  margin-bottom: ${(props) => props.marginBottom};
`

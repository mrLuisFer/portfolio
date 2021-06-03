import styled from 'styled-components'
import { titleStyle } from '../../../styles/mixins/titleStyle'

export const CardTitleStyled: any = styled.h2`
  ${titleStyle}

  margin-bottom: ${(props: any) => props.marginBottom};
`

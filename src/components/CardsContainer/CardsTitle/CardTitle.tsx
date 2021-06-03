import React from 'react'
import { CardTitleStyled } from './CardTitle.styles'

type TCardTitle = {
  title?: string
  titleSpan?: string
  marginBottom?: string
  withMarginBottom: boolean
}

export default function CardTitle({
  title = '',
  titleSpan = '',
  marginBottom = '0',
  withMarginBottom,
}: TCardTitle) {
  return (
    <CardTitleStyled marginBottom={withMarginBottom ? marginBottom : ''}>
      <i className='fas fa-caret-right' />
      {title}
      <span>{titleSpan}</span>
    </CardTitleStyled>
  )
}

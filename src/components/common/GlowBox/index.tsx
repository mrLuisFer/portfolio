import { CSSProperties, MouseEvent, ReactNode, useState } from 'react'
import styled from 'styled-components'

export type GlowBoxProps = {
  children: ReactNode
  color: string
  backgroundColor?: string
  borderColor?: string
  size?: number
  padding?: number
  defaultBorder?: string
  className?: string
  width?: string
}
type MousePosition = {
  x: number
  y: number
}

type GlowBoxStyledProps = {
  attrs: Partial<Omit<GlowBoxProps, 'children'>>
}

const GlowBoxStyled = styled.div<GlowBoxStyledProps>`
  background-color: ${(props) => props.attrs.backgroundColor || '#000'};
  border-radius: 8px;
  border: 1px solid ${(props) => props.attrs.defaultBorder};
  display: inline-block;
  overflow: hidden;
  padding: ${(props) => props.attrs.padding}px;
  position: relative;
  text-align: center;
  transition: 0.15ms ease;
  width: ${(props) => props.attrs.width || 'fit-content'};

  &:hover {
    transition: 0.15ms ease;
    border-color: ${(props) =>
      props.attrs.borderColor || props.attrs.defaultBorder || 'transparent'};
  }

  &::after {
    content: '';
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    width: ${(props) => props.attrs.size}px;
    height: ${(props) => props.attrs.size}px;
    background: radial-gradient(
      circle,
      ${(props) => props.attrs.color || '#fff'},
      transparent 80%
    );
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`

export default function GlowBox({
  children,
  color,
  backgroundColor,
  borderColor,
  size = 150,
  padding = 20,
  defaultBorder = 'transparent',
  className,
  width,
}: GlowBoxProps) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <GlowBoxStyled
      className={className}
      onMouseMove={handleMouseMove}
      attrs={{ color, backgroundColor, borderColor, size, padding, defaultBorder, width }}
      style={
        {
          '--x': position.x + 'px',
          '--y': position.y + 'px',
        } as CSSProperties
      }>
      {children}
    </GlowBoxStyled>
  )
}

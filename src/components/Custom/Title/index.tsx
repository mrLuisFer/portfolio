import { Text, Box, ChakraProps } from '@chakra-ui/react'

interface TitleProps {
  children: any
  id: string
  helperProps?: ChakraProps
  helperText?: string
  colorscheme?: 'blue' | 'pink' | 'orange'
  gradient?: boolean
}

export default function Title({
  children,
  id,
  helperText,
  helperProps,
  gradient = false,
  colorscheme,
}: TitleProps) {
  return (
    <Text key={id} id={id}>
      {children}
      {helperText && <Text {...helperProps}>{helperText}</Text>}
    </Text>
  )
}

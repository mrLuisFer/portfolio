import { Text, ChakraProps, Heading } from '@chakra-ui/react'
import colors, { GradientColors } from 'src/utils/gradientColors'

interface TitleProps {
  children: any
  id?: string
  helperProps?: ChakraProps
  helperText?: string
  colorscheme?: keyof GradientColors
  weight?:
    | 'bold'
    | 'hairline'
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'extrabold'
    | 'black'
  bgAnimate?: boolean
  [props: string]: ChakraProps | any
}

export default function Title({
  children,
  id = '',
  helperText,
  helperProps,
  colorscheme = 'default',
  weight = 'extrabold',
  bgAnimate = false,
  ...props
}: TitleProps) {
  return (
    <Heading
      key={id}
      id={id}
      as='h2'
      fontWeight={weight}
      transition='0.15s ease'
      bgClip={colorscheme ? 'text' : ''}
      bgGradient={colorscheme ? colors[colorscheme] : ''}
      _hover={{
        backgroundPosition: bgAnimate ? '-5.5em -4em' : '',
      }}
      {...props}>
      {children}
      {helperText && (
        <Text
          as='span'
          display='block'
          fontSize='lg'
          color='gray.500'
          opacity='0.8'
          fontWeight='medium'
          {...helperProps}>
          {helperText}
        </Text>
      )}
    </Heading>
  )
}

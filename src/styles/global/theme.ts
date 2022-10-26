import { extendTheme } from '@chakra-ui/react'

const colors = {}

const theme = extendTheme({
  colors,
  styles: {
    global: {
      'html, body': {
        background: 'black',
        color: 'white',
      },
      a: {
        color: 'teal.500',
      },
    },
  },
})

export default theme

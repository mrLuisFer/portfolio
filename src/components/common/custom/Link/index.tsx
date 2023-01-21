import NextLink from 'next/link'
import { ChakraProps, Link as ChakraLink, ChakraStyledOptions } from '@chakra-ui/react'

interface LinkProps {
  href: string
  children: any
  external?: boolean
  noBrightness?: boolean
  [any: string]: ChakraProps | ChakraStyledOptions | any
}

const Link = ({
  href,
  children,
  external = false,
  noBrightness = false,
  ...props
}: LinkProps) => {
  if (external) {
    return (
      <ChakraLink
        as='a'
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        textDecoration='none'
        outline='none'
        _hover={{
          textDecoration: 'none',
          filter: noBrightness ? '' : 'brightness(1.1)',
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    )
  }

  return (
    <NextLink href={href}>
      <ChakraLink
        as='a'
        textDecoration='none'
        outline='none'
        _hover={{
          textDecoration: 'none',
          filter: noBrightness ? '' : 'brightness(1.1)',
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default Link

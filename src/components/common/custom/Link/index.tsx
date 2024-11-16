import NextLink from 'next/link'

interface LinkProps {
  href: string
  children: any
  external?: boolean
  noBrightness?: boolean
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
      <a
        href={href}
        target='_blank'
        rel='noreferrer noopener'
        className={`decoration-transparent outline-none filter ${
          noBrightness ? '' : 'hover:brightness-110'
        }`}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      href={href}
      className='decoration-transparent outline-none filter hover:brightness-110'
      {...props}
    >
      {children}
    </NextLink>
  )
}

export default Link

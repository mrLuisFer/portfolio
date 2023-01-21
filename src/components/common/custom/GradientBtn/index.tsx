import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import colors, { GradientColors } from 'src/utils/gradientColors'
import Link from '../Link'

interface GradientBtnProps {
  colorscheme: keyof GradientColors
  children: any
  href?: string
  asLink?: boolean
  withIcon?: boolean
  iconComponent?: JSX.Element | HTMLElement | ReactNode | any
  [props: string]: any
}

const GradientBtn = ({
  colorscheme,
  children,
  asLink,
  href,
  iconComponent,
  ...props
}: GradientBtnProps) => {
  return (
    <Link
      as={asLink ? 'a' : 'button'}
      href={href || ''}
      background='white'
      color='white'
      borderRadius='5px'
      backgroundImage={colors[colorscheme]}
      backgroundClip='padding-box'
      fontWeight='semibold'
      padding={asLink ? '0.7rem 0.2rem' : '3px'}
      external={!asLink}
      {...props}
    >
      <Text
        as='span'
        background='black'
        p='0.5rem 1rem'
        lineHeight='10'
        borderRadius='5px'
        fontWeight='extrabold'
        transition='0.15s ease'
        _hover={{
          bgGradient: colors[colorscheme],
          color: 'black',
          boxShadow: `0px 0px 5px 10px ${colors[colorscheme]}`,
        }}
      >
        {iconComponent && (
          <Text display='inline-block' mr='0.5rem'>
            {iconComponent}
          </Text>
        )}
        {children}
      </Text>
    </Link>
  )
}

export default GradientBtn

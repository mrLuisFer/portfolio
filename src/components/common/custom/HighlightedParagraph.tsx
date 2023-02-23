import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Title from 'src/components/common/custom/Title'
import { GradientColors } from 'src/utils/gradientColors'

interface HighlightedParagraphProps {
  children: ReactNode | ReactNode[] | any
  color: keyof GradientColors
}

export default function HighlightedParagraph({
  children,
  color,
}: HighlightedParagraphProps) {
  if (!children) return <></>

  return (
    <Text
      as='p'
      fontSize='lg'
      opacity='0.8'
      _hover={{ opacity: '1' }}
      textAlign={['center', 'left']}
      m={['1rem 1.5rem 0 1.5rem', '1rem 0 0']}>
      {children.map((child: any) => {
        if (child.type === 'span') {
          return (
            <Title
              key={child.props.children}
              id={child.props.children}
              as='span'
              weight='bold'
              colorscheme={color}
              fontSize='lg'
              opacity='1'>
              {child.props.children}
            </Title>
          )
        } else {
          return child
        }
      })}
      {/* <Title
        id='js-label'
        as='span'
        weight='bold'
        colorscheme='yellow'
        fontSize='lg'
        opacity='1'></Title> */}
    </Text>
  )
}

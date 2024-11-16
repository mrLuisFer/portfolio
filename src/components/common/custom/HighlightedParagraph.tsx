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
    <p className='mb-6 ml-0 mr-6 mt-4 text-center text-lg opacity-80 transition hover:opacity-100 sm:text-left'>
      {children.map((child: any) => {
        if (child.type === 'span') {
          return (
            <span
              key={child.props.children}
              id={child.props.children}
              className={`text-lg font-bold transition text-[${color}]`}
            >
              {child.props.children}
            </span>
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
    </p>
  )
}

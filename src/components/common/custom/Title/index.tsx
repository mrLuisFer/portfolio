import colors, { GradientColors } from 'src/utils/gradientColors'

interface TitleProps {
  children: any
  id?: string
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
}

export default function Title({
  children,
  id = '',
  helperText,
  colorscheme = 'default',
  weight = 'extrabold',
  bgAnimate = false,
  ...props
}: TitleProps) {
  return (
    <p
      key={id}
      id={id}
      className={`bg-gradient-to-r from-transparent to-transparent bg-clip-text text-transparent transition font-${weight} ${
        bgAnimate ? 'bg-animate' : ''
      } ${colorscheme ? `bg-[${colorscheme}]` : ''}`}
      {...props}
    >
      {children}
      {helperText && (
        <span className='block text-base font-medium text-gray-500 opacity-80 sm:text-lg'>
          {helperText}
        </span>
      )}
    </p>
  )
}

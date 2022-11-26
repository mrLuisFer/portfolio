import { Text } from '@chakra-ui/react'
import styles from './Paragraph.module.css'

interface ParagraphProps {
  children: any
  customColor?: string
  [props: string]: any
}

export default function Paragraph({ children, customColor, ...props }: ParagraphProps) {
  return (
    <Text
      className={styles.paragraph}
      maxW='488px'
      lineHeight={1.8}
      color={customColor || 'whiteAlpha.600'}
      _hover={{
        color: 'whiteAlpha.700',
      }}
      {...props}>
      {children}
    </Text>
  )
}

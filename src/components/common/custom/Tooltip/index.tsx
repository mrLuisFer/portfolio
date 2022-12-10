import { Box, Tooltip as ChakraTooltip } from '@chakra-ui/react'

export default function Tooltip({ label, children }: { label: string; children: any }) {
  return (
    <ChakraTooltip label={label} hasArrow color='white' borderRadius='10px' bg='#222'>
      <Box position='relative'>{children}</Box>
    </ChakraTooltip>
  )
}

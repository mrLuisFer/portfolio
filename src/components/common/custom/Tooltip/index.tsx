import { Box, PlacementWithLogical, Tooltip as ChakraTooltip } from '@chakra-ui/react'

export default function Tooltip({
  label,
  children,
  placement = 'bottom',
}: {
  label: string
  children: any
  placement?: PlacementWithLogical
}) {
  return (
    <ChakraTooltip
      label={label}
      hasArrow
      color='white'
      borderRadius='10px'
      bg='#222'
      placement={placement}
    >
      <Box position='relative'>{children}</Box>
    </ChakraTooltip>
  )
}

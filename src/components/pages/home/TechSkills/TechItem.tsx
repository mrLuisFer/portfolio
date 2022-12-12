import { Box, Text } from '@chakra-ui/react'
import Tooltip from 'src/components/common/custom/Tooltip'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { TechIcons } from './techIconsList'

export default function TechItem({ item }: { item: TechIcons }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Box
        key={item.label}
        fontSize={['30px', '50px']}
        opacity='0.8'
        transition='0.1s ease'
        _hover={{ opacity: '1', color: item.color }}
        cursor='grab'
        _active={{
          cursor: 'grabbing',
        }}>
        <Tooltip label={item.label}>
          <Box
            display={'flex'}
            alignItems='center'
            gap={3}
            justifyContent={['center', 'flex-start']}>
            <Box>{item.icon}</Box>
            <Text fontSize='lg' display={['block', 'none']}>
              {item.label}
            </Text>
          </Box>
        </Tooltip>
      </Box>
    </div>
  )
}

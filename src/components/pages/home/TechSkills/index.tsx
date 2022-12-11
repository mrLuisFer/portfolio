import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Title from '../../../common/custom/Title'
import paths from 'src/constants/paths'
import TechItem from './TechItem'
import { useState } from 'react'
import { TechIcons, techIconsList } from './techIconsList'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'

export default function TechSkills() {
  const [techIconsListState, setTechIconsListState] = useState(techIconsList)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (over === null) {
      return
    }
    if (active.id !== over.id) {
      setTechIconsListState((items: TechIcons[]) => {
        const oldIndex: number = items.map((item) => item.id).indexOf(active.id as number)
        const newIndex: number = items.map((item) => item.id).indexOf(over.id as number)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <Box paddingBottom='2rem'>
      <Title colorscheme='blue' fontSize='5xl' textAlign='center' bgAnimate>
        Tech Skills
      </Title>
      <DndContext
        onDragEnd={handleDragEnd}
        sensors={sensors}
        collisionDetection={closestCenter}>
        <SortableContext
          items={techIconsListState}
          strategy={horizontalListSortingStrategy}>
          <Box
            display={['grid', 'flex']}
            alignItems='center'
            justifyContent='center'
            gap='2rem'
            mt='2rem'
            flexDirection={['column', 'row']}
            gridTemplateColumns={'repeat(2, 150px)'}>
            {techIconsListState.map((item) => (
              <TechItem key={item.id} item={item} />
            ))}
          </Box>
        </SortableContext>
      </DndContext>
      <Link href={paths.projects}>
        <Text
          as='a'
          textAlign='center'
          mt={['2rem', '1rem']}
          fontSize='1rem'
          fontWeight='bold'
          opacity='0.5'
          display='block'
          color='white'
          cursor='pointer'
          _hover={{ opacity: '1' }}
          _active={{ color: 'blue.300' }}>
          and more, see more projects...
        </Text>
      </Link>
    </Box>
  )
}

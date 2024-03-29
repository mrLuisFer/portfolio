import { Box, Text, useMediaQuery } from '@chakra-ui/react'
import Title from '../../../common/custom/Title'
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
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { useTranslation } from 'src/hooks/useTranslation'
import Tooltip from 'src/components/common/custom/Tooltip'

export default function TechSkills() {
  const [techIconsListState, setTechIconsListState] = useState(techIconsList)

  const { t } = useTranslation()

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
    ssr: true,
  })
  const [isLessThan760px] = useMediaQuery('(max-width: 760px)', {
    ssr: true,
  })

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
      <Tooltip label={t('canDragDropItem')} placement='top'>
        <Title colorscheme='blue' fontSize='5xl' textAlign='center' bgAnimate>
          {t('techSkills')}
        </Title>
      </Tooltip>
      {isLessThan760px ? (
        <Box
          display={['grid', 'grid', 'flex']}
          alignItems='center'
          justifyContent='center'
          gap='2rem'
          mt='2rem'
          flexDirection={['column', 'column', 'row']}
          gridTemplateColumns={'repeat(2, 150px)'}>
          {techIconsListState.map((item) => (
            <TechItem key={item.id} item={item} />
          ))}
        </Box>
      ) : (
        <DndContext
          onDragEnd={handleDragEnd}
          sensors={sensors}
          collisionDetection={closestCenter}>
          <SortableContext
            items={techIconsListState}
            strategy={
              isLargerThan800
                ? horizontalListSortingStrategy
                : verticalListSortingStrategy
            }>
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
      )}
      <Text
        textAlign='center'
        mt={['2rem', '1rem']}
        fontSize='1rem'
        fontWeight='bold'
        opacity='0.5'
        display='block'
        color='white'>
        {t('andLearningMore')}...
      </Text>
    </Box>
  )
}

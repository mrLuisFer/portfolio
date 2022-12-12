import { Box, Grid, GridItem, Heading, SlideFade, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Title from '../../../common/custom/Title'
import EditorUI from './Editor'
import { getLikeToDoList } from './likeTodoList'
import { useTranslation } from 'src/hooks/useTranslation'

export default function LikeToDo() {
  const [iconActive, setIconActive] = useState('')
  const [accordionName, setAccordionName] = useState('')
  const [itemIndex, setItemIndex] = useState(0)

  const { t } = useTranslation()
  const likeToDoList = getLikeToDoList(t)

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemIndex === 4) {
        setItemIndex(0)
      } else {
        setItemIndex(itemIndex + 1)
      }
      setAccordionName(likeToDoList[itemIndex].title)
      setIconActive(likeToDoList[itemIndex].title)
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [itemIndex])

  return (
    <Box marginTop='100px' position='relative'>
      <Title colorscheme='yellow' fontSize='5xl' textAlign='center'>
        {t('whatILike')}
      </Title>
      <Grid
        templateColumns={['none', 'repeat(2, 400px)']}
        justifyContent='center'
        gap={['2rem', 20]}
        mt='2.5rem'
        gridTemplateRows={['350px 1fr', 'none']}>
        <GridItem w='100%'>
          <EditorUI
            setIconActive={setIconActive}
            icons={likeToDoList}
            itemIndex={itemIndex}
            setAccordionName={setAccordionName}
          />
        </GridItem>
        <GridItem w='100%' bg='transparent'>
          <Box
            display='flex'
            flexDirection='column'
            gap='1rem'
            minHeight={['500px', '600px']}>
            {likeToDoList.map((item) => (
              <Box
                key={item.title}
                border='none'
                onMouseOver={() => setAccordionName(item.title)}
                onMouseLeave={() => setAccordionName('')}>
                <Heading
                  as='h3'
                  color='white'
                  opacity={
                    item.title === iconActive || item.title === accordionName
                      ? '1'
                      : '0.6'
                  }>
                  {item.title}
                </Heading>
                {item.title === accordionName || item.title === iconActive ? (
                  <SlideFade
                    in={item.title === accordionName || item.title === iconActive}
                    offsetY='20px'>
                    <Text color='gray.500' _hover={{ color: 'white' }}>
                      {item.value}
                    </Text>
                  </SlideFade>
                ) : null}
              </Box>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

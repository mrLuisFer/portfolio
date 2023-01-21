import { Box, Grid, GridItem, Heading, Slide, SlideFade, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Title from '../../../common/custom/Title'
import EditorUI from './Editor'
import { getLikeToDoList } from './likeTodoList'
import { useTranslation } from 'src/hooks/useTranslation'

export default function LikeToDo() {
  const [iconActive, setIconActive] = useState<string>('')
  const [accordionName, setAccordionName] = useState<string>('')
  const [itemIndex, setItemIndex] = useState<number>(0)
  const [hideEditor, setHideEditor] = useState<boolean>(false)

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
      <Box onClick={() => setHideEditor(false)} cursor={hideEditor ? 'pointer' : 'auto'}>
        <Title colorscheme='yellow' fontSize='5xl' textAlign='center'>
          {t('whatILike')}
        </Title>
      </Box>
      <Grid
        justifyContent='center'
        gap={['2rem', 20]}
        mt='2.5rem'
        templateColumns={['none', '1fr', `${hideEditor ? '1fr' : 'repeat(2, 400px)'}`]}
        gridTemplateRows={[`${hideEditor ? '1fr' : '350px 1fr'}`, 'none']}
      >
        {hideEditor ? (
          <></>
        ) : (
          <SlideFade in={!hideEditor} offsetY='-50px'>
            <GridItem w='100%'>
              <EditorUI
                setIconActive={setIconActive}
                icons={likeToDoList}
                itemIndex={itemIndex}
                setAccordionName={setAccordionName}
                setHideEditor={setHideEditor}
              />
            </GridItem>
          </SlideFade>
        )}

        <GridItem w='100%' bg='transparent'>
          <Box
            display='flex'
            flexDirection='column'
            gap='1rem'
            minHeight={['500px', '600px']}
            alignItems={['center', 'center', `${hideEditor ? 'center' : 'flex-start'}`]}
          >
            {likeToDoList.map((item) => (
              <Box
                key={item.title}
                border='none'
                onMouseOver={() => setAccordionName(item.title)}
                onMouseLeave={() => setAccordionName('')}
                textAlign={['center', 'center', `${hideEditor ? 'center' : 'left'}`]}
              >
                <Heading
                  as='h3'
                  color='white'
                  opacity={
                    item.title === iconActive || item.title === accordionName
                      ? '1'
                      : '0.6'
                  }
                >
                  {item.title}
                </Heading>
                {item.title === accordionName || item.title === iconActive ? (
                  <SlideFade
                    in={item.title === accordionName || item.title === iconActive}
                    offsetY='20px'
                  >
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

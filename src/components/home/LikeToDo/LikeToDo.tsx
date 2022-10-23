import { Box, Grid, GridItem, Heading, SlideFade, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Title from 'src/components/Custom/Title'
// import { SiInstacart } from 'react-icons/si'
import { GiCat } from 'react-icons/gi'
import { MdTravelExplore } from 'react-icons/md'
import { IoGameController } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'
import { FaRegKeyboard } from 'react-icons/fa'
import EditorUI from './Editor'

interface LikeTodo {
  title: string
  value: string
  icon: any
}

const likeToDoList: LikeTodo[] = [
  {
    title: 'Cats',
    value:
      'I have always had different pets but I like cats for their tranquility and I identify with the same taste for being asleep all day long.',
    icon: <GiCat size={50} key='icon-cat' />,
  },
  {
    title: 'Games',
    value:
      'Video games have always been an important part of my life and have taught me a lot and have helped me to de-stress my mind when you are always overthinking things.',
    icon: <IoGameController size={50} key='game' />,
  },
  {
    title: 'Music',
    value:
      'I love music, no matter the place or the time, music is a fundamental part of my life and my favorite band is Arctic Monkeys.',
    icon: <FiMusic size={50} key='game' />,
  },
  {
    title: 'Travel',
    value:
      'I enjoy getting out and exploring interesting areas such as esplanades and ranches where I can go for a walk and clear my mind.',
    icon: <MdTravelExplore size={50} key='explore' />,
  },
  {
    title: 'Keyboards',
    value:
      'In recent months I have discovered a great community of both programmers and geeks and among them the keyboard community with whom I have learned how to modding and customize a mechanical keyboard.',
    icon: <FaRegKeyboard size={50} key='game' />,
  },
]

export default function LikeToDo() {
  const [iconActive, setIconActive] = useState('')
  const [accordionName, setAccordionName] = useState('')

  return (
    <Box marginTop='100px' position='relative'>
      <Title colorscheme='yellow' fontSize='5xl' textAlign='center'>
        What I like?
      </Title>
      <Grid
        templateColumns='repeat(2, 400px)'
        justifyContent='center'
        gap={20}
        mt='2.5rem'>
        <GridItem w='100%'>
          <EditorUI setIconActive={setIconActive} icons={likeToDoList} />
        </GridItem>
        <GridItem w='100%' bg='transparent'>
          <Box display='flex' flexDirection='column' gap='1rem' minHeight='600px'>
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

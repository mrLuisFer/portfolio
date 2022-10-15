import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Title from 'src/components/Custom/Title'
import EditorUI from './Editor'

interface LikeTodo {
  title: string
  value: string
}

const likeToDoList: LikeTodo[] = [
  {
    title: 'Cats',
    value:
      'I have always had different pets but I like cats for their tranquility and I identify with the same taste for being asleep all day long.',
  },
]

export default function LikeToDo() {
  return (
    <Box marginTop='200px' position='relative'>
      <Title colorscheme='yellow' fontSize='5xl' textAlign='center'>
        What I like?
      </Title>
      <Grid
        templateColumns='repeat(2, 400px)'
        justifyContent='center'
        gap={8}
        mt='2.5rem'>
        <GridItem w='100%'>
          <EditorUI />
        </GridItem>
        <GridItem w='100%' bg='transparent'>
          {likeToDoList.map((item) => (
            <Box key={item.title}>
              <Heading as='h3' color='white'>
                {item.title}
              </Heading>
              <Text color='gray.500'>{item.value}</Text>
            </Box>
          ))}
        </GridItem>
      </Grid>
    </Box>
  )
}

// <SLikeToDo>
//   <LikeToDoTitle>
//     What <span>I like</span>?
//   </LikeToDoTitle>
//   <LikeToDoContainer>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-book' />
//       <LikeTodoCardText>Read Books</LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-laptop-code' />
//       <LikeTodoCardText>Develop Apps</LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-utensils' />
//       <LikeTodoCardText>
//         Cook <span>and Eat</span>{' '}
//       </LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-gamepad' />
//       <LikeTodoCardText>
//         Play <span>VideoGames</span>
//       </LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-graduation-cap' />
//       <LikeTodoCardText>Study & Learn</LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-cat' />
//       <LikeTodoCardText>
//         Cats <span>(Michis)</span>{' '}
//       </LikeTodoCardText>
//     </LikeToDoCard>
//     <LikeToDoCard>
//       <LikeToDoCardIcon className='fas fa-route' />
//       <LikeTodoCardText>Travel & Know</LikeTodoCardText>
//     </LikeToDoCard>
//   </LikeToDoContainer>
// </SLikeToDo>

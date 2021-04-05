import {
  SLikeToDo,
  LikeToDoTitle,
  LikeToDoContainer,
  LikeToDoCard,
  LikeToDoCardIcon,
  LikeTodoCardText,
} from './LikeToDo.styles'

export default function LikeToDo() {
  return (
    <SLikeToDo>
      <LikeToDoTitle>
        What <span>I like</span>?
      </LikeToDoTitle>
      <LikeToDoContainer>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-book' />
          <LikeTodoCardText>Read Books</LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-laptop-code' />
          <LikeTodoCardText>Develop Apps</LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-utensils' />
          <LikeTodoCardText>
            Cook <span>and Eat</span>{' '}
          </LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-gamepad' />
          <LikeTodoCardText>
            Play <span>VideoGames</span>
          </LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-graduation-cap' />
          <LikeTodoCardText>Study & Learn</LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-cat' />
          <LikeTodoCardText>
            Cats <span>(Michis)</span>{' '}
          </LikeTodoCardText>
        </LikeToDoCard>
        <LikeToDoCard>
          <LikeToDoCardIcon className='fas fa-route' />
          <LikeTodoCardText>Travel & Know</LikeTodoCardText>
        </LikeToDoCard>
      </LikeToDoContainer>
    </SLikeToDo>
  )
}

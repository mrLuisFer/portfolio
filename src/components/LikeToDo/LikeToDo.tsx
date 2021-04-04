export default function LikeToDo() {
  return (
    <div className='LikeToDo'>
      <h2>
        What <span>I like</span>?
      </h2>
      <div className='LikeToDo__container'>
        <div>
          <i className='fas fa-book' />
          <p>Read Books</p>
        </div>
        <div>
          <i className='fas fa-laptop-code' />
          <p>Develop Apps</p>
        </div>
        <div>
          <i className='fas fa-utensils' />
          <p>
            Cook <span>and Eat</span>{' '}
          </p>
        </div>
        <div>
          <i className='fas fa-gamepad' />
          <p>
            Play <span>VideoGames</span>
          </p>
        </div>
        <div>
          <i className='fas fa-graduation-cap' />
          <p>Study & Learn</p>
        </div>
        <div>
          <i className='fas fa-cat' />
          <p>
            Cats <span>(Michis)</span>{' '}
          </p>
        </div>
        <div>
          <i className='fas fa-route' />
          <p>Travel & Know</p>
        </div>
      </div>
    </div>
  )
}

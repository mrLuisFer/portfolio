import React from "react"

export default function LikeToDo() {
  return (
    <div className="LikeToDo">
      <h2>
        What <span>I like</span>?
      </h2>
      <div className="LikeToDo__container">
        <div>
          <i className="fas fa-book"></i>
          <p>Read Books</p>
        </div>
        <div>
          <i className="fas fa-laptop-code"></i>
          <p>Develop Apps</p>
        </div>
        <div>
          <i className="fas fa-cookie-bite"></i>
          <p>
            Cooking <span>Cookies</span>
          </p>
        </div>
        <div>
          <i className="fas fa-gamepad"></i>
          <p>
            Play <span>VideoGames</span>
          </p>
        </div>
        <div>
          <i className="fas fa-graduation-cap"></i>
          <p>Study & Learn</p>
        </div>
        <div>
          <i className="fas fa-cat"></i>
          <p>Cats</p>
        </div>
        <div>
          <i className="fas fa-route"></i>
          <p>Travel & Know</p>
        </div>
      </div>
    </div>
  )
}

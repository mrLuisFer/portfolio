import React from "react"
import "./scss/_App.scss"
// views
import HomePage from "./views/HomePage"
// components
import NavBar from "./components/NavBar"
// Assets
import wavePattern from "./assets/wave-pattern.svg"

export default function App(): JSX.Element {
  // Components for the view
  return (
    <div className="App">
      <img className="wave-pattern" src={wavePattern} alt="wave-pattern" />
      <NavBar />
      <HomePage />
    </div>
  )
}

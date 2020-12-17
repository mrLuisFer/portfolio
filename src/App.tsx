import React from "react"
import "./scss/_App.scss"
// views
import HomePage from "./views/HomePage"
// components
import NavBar from "./components/NavBar"

export default function App(): JSX.Element {
  // Components for the view
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  )
}

import React from "react"
import { Link, BrowserRouter as Router } from "react-router-dom"

export default function NavBar(): JSX.Element {
  return (
    <Router>
      <div className="NavBar">
        <div className="NavBar__logo">
          <span className="NavBar__logo-title">mrLuisFer</span>
        </div>
        <div className="NavBar__links">
          <Link to="/">Contact me</Link>
          <Link to="/">About me</Link>
        </div>
      </div>
    </Router>
  )
}

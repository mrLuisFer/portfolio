import React from "react"
import "./scss/_App.scss"
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom"

// views
import HomePage from "./views/HomePage"
import AboutMe from "./views/AboutMe"
// components
import NavBar from "./components/NavBar"
// Assets
import wavePattern from "./assets/wave-pattern.svg"

export default function App(): JSX.Element {
  // Components for the view
  return (
    <Router>
      <div className="App">
        <img className="wave-pattern" src={wavePattern} alt="wave-pattern" />
        <NavBar />

        <Switch>
          <Route exact path="/" component={withRouter(HomePage)}></Route>
          <Route path="/contact-me"></Route>
          <Route path="/about-me" component={withRouter(AboutMe)}></Route>
        </Switch>
      </div>
    </Router>
  )
}

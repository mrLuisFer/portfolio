import "./scss/_App.scss"
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// views
import HomePage from "./views/HomePage"
import ContactUs from "./views/ContactMe"
// components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
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
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/contact-me" component={ContactUs}></Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

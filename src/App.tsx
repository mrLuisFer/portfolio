import './scss/_App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Assets
import wavePattern from './assets/wave-pattern.svg'
// views
import HomePage from './views/HomePage/HomePage'
import ContactUs from './views/ContactMe/ContactMe'
// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import BtnToTop from './components/BtnToTop/BtnToTop'

export default function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <img className='wave-pattern' src={wavePattern} alt='wave-pattern' />
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact-me' component={ContactUs} />
        </Switch>
        <BtnToTop />
        <Footer />
      </div>
    </Router>
  )
}

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import wavePattern from './assets/wave-pattern.svg'
// views
import HomePage from './views/HomePage/HomePage'
import ContactUs from './views/ContactMe/ContactMe'
// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import BtnToTop from './components/BtnToTop/BtnToTop'

import { AppStyled, WavePattern } from './styles/global/App.styles'

export default function App(): JSX.Element {
  return (
    <Router>
      <AppStyled>
        <WavePattern
          src={wavePattern}
          alt='mrLuisFer wave style illustration for page top'
        />
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/contact-me' component={ContactUs} />
        </Switch>
        <BtnToTop />
        <Footer />
      </AppStyled>
    </Router>
  )
}

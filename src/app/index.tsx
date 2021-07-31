import { BrowserRouter as Router } from 'react-router-dom'
import wavePattern from 'src/assets/wave-pattern.svg'
// components
import NavBar from 'src/components/NavBar/NavBar'
import Footer from 'src/components/Footer/Footer'
import Routes from 'src/routes/Routes'

import { AppStyled, WavePattern } from './App.styles'

export default function App(): JSX.Element {
  return (
    <Router>
      <AppStyled>
        <WavePattern
          src={wavePattern}
          alt='mrLuisFer wave style illustration for page top'
        />
        <NavBar />
        <Routes />
        <Footer />
      </AppStyled>
    </Router>
  )
}

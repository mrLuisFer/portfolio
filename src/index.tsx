import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './app'
// import reportWebVitals from './reportWebVitals'

import './styles/global/normalize.css'
import './styles/global/variables.css'
import './styles/global/globals.css'
import './styles/global/customScroll.css'

const root = document.getElementById('root')

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

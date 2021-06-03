import React from 'react'
import { Switch, Route } from 'react-router-dom'
// views
import HomePage from '../views/HomePage/HomePage'
import ContactUs from '../views/ContactMe/ContactMe'
import Error from '../views/Error/Error'

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/contact-me' component={ContactUs} />
      <Route path='*' component={Error} />
    </Switch>
  )
}

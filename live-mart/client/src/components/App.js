import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Login from './Login'
import Checkout from './UserCheckout'

export default function App () {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/userDashboard' component={Dashboard} />
        <Route path='/userCheckout' component={Checkout}/>
      </div>
    </BrowserRouter>
  )
}

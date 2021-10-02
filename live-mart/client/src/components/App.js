import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import SignUp from './SignUpForm'
import Dashboard from './Dashboard'
import Checkout from './UserCheckout'
import SignIn from './SignInForm'
import * as actions from '../actions'
import UserProfile from './UserProfile'

function App(props) {

  props.fetchUser()

  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/userprofile' component={UserProfile} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default connect(null, actions)(App)

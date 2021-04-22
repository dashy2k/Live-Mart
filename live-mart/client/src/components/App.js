import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import SignUp from './SignUpForm'
import Dashboard from './Dashboard'
import Checkout from './UserCheckout'
import SignIn from './SignInForm'
import VerifyOTP from './VerifyOTP'
import * as actions from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/verifyOTP' component={VerifyOTP} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)

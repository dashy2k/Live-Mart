import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import SignUp from './SignUpForm'
import Dashboard from './Dashboard'
import Login from './Login'
import Checkout from './UserCheckout'
import * as actions from '../actions'
import VerifyOTP from './VerifyOTP';

class App extends Component{

  componentDidMount() {
    this.props.fetchUser()
  }
  render () {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/verifyOTP' component={VerifyOTP}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)

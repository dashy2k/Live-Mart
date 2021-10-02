import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Grid } from '@material-ui/core/'
import { useHistory } from 'react-router-dom'
import * as actions from '../actions'
import { connect, useSelector } from 'react-redux'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

function OrderConfirmation (props) {
  console.log(props)

  const userId = useSelector(state => state.auth._id)

  const [showTracker, setShowTracker] = React.useState(false)
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  })

  const history = useHistory()

  const { vertical, horizontal, open } = state

  const handleClick = newState => () => {
    setState({ open: true, ...newState })
    setShowTracker(true)
  }

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  const handleCheckout = () => {
    props.checkout(userId)
    history.push('/dashboard')
  }

  const buttons = (
    <React.Fragment>
      <Grid container justify='center'>
        {!showTracker && (
          <Button
            variant='contained'
            color='primary'
            onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
          >
            Check Status
          </Button>
        )}
      </Grid>
    </React.Fragment>
  )

  return (
    <div>
      {buttons}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity='success'>
          Your Order was placed Successfully
        </Alert>
      </Snackbar>
      <Grid container justify='center'>
        <Grid container justify='center'>
          {showTracker && (
            <Button variant='outlined' color='primary' onClick={handleCheckout}>
              Checkout Successfully
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default connect(null, actions)(OrderConfirmation)

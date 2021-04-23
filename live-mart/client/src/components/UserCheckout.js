import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import React from 'react'
import { useSelector } from 'react-redux'
import AddressForm from './AddressForm'
import OrderConfirmation from './OrderConfirmation'
import PaymentForm from './PaymentForm'
import Review from './ReviewItems'
import { connect } from 'react-redux'
import * as actions from '../actions'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  back : {
    color: '#ffffff',
    padding : theme.spacing(2)
  }
}))

const steps = [
  'Review your order',
  'Shipping Adress',
  'Payment Details',
  'Order Confirmation'
]

function renderCartItems (items) {
  return (
    <Review
      key={items.productId}
      name={items.product}
      quantity={items.quantity}
      price={items.price}
      img={items.imgURL}
    />
  )
}

function Checkout () {

  let userCart = useSelector(state => state.auth.cart)
  
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  function getStepContent (step) {
    switch (step) {
      case 0:
        return userCart.map(renderCartItems)
      case 1:
        return <AddressForm />
      case 2:
        return <PaymentForm />
      case 3:
        return <OrderConfirmation />
      default:
        throw new Error('Unknown step')
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='absolute' color='primary' className={classes.appBar}>
        <Toolbar>
          <Grid container>
                  <Button aria-label='like' className={classes.back} href='/dashboard'>
                    <ArrowBackIcon/> Back To Live Mart
                  </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component='h1' variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant='subtitle1'>
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Track Order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  )
}

export default connect(null, actions)(Checkout)
import React from 'react'
import { makeStyles} from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import ShoppingCart from './ShoppingCart'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  MainBox: {
    margin : theme.spacing(2,0,2)
  },
  cart : {
      margin : theme.spacing(6,0,0)
  }
}))

function getSteps () {
  return [
    'Review Items',
    'Shipping & Billing Info',
    'Payment',
    'Order Confirmation'
  ]
}

function ShoppingCartItems () {

  const classes = useStyles()

  return (
      <React.Fragment>
    <div className={classes.MainBox}>
      <Grid container justify='center'>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5'>Your Cart</Typography>
          <Grid container justify='flex-end' className={classes.MainBox}><Button
          href = '/userDashboard'
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<ArrowBackIcon/>}
      >
        Back to Store
      </Button></Grid>
          <Divider />
        </Grid>
        <Grid container justify='center'>
          <Grid item xs={12} sm={6} className={classes.cart}>
            <ShoppingCart />
          </Grid>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}

function BillingInfo(){
    return (<React.Fragment>
    <div>
        <Typography variant='h5'>Enter Adress</Typography>
    </div>
    </React.Fragment>);
}

function Payment(){
    return (<React.Fragment>
        <div>
            <Typography variant='h5'>Enter Adress</Typography>
        </div>
        </React.Fragment>);
}

function Feedback(){
    return (<React.Fragment>
        <div>
            <Typography variant='h5'>Enter Adress</Typography>
        </div>
        </React.Fragment>);
}

function getStepContent (step) {
  switch (step) {
    case 0:
      return ShoppingCartItems();
    case 1:
      return BillingInfo();
    case 2:
      return Payment();
    case 3:
      return Feedback();
    default:
      return console.log('Unknown Error Occured');
  }
}

export default function CustomizedSteppers () {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = getSteps()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
              {getStepContent(activeStep)}
            <Grid container justify='center'>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  )
}

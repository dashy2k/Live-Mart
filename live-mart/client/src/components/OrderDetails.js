import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import InboxIcon from '@material-ui/icons/Inbox'
import React from 'react'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import StepContent from '@material-ui/core/StepContent'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck'

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    backgroundColor: theme.palette.background.paper
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}))

function ListItemLink (props) {
  return <ListItem button component='a' {...props} />
}

function getSteps () {
  return ['Order placed', 'Order Dispatched', 'In Transit', 'Delivered']
}

function getStepContent (step) {
  switch (step) {
    case 0:
      return 'You order was Successfully placed'
    case 1:
      return 'Order has been dispatched from the Retailer'
    case 2:
      return `Order has Reached Local Store`
    case 3:
      return 'Order has been delivered Successfully'
    default:
      return 'Unknown step'
  }
}

export default function SimpleList () {
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
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary='Currently Active' />
        </ListItem>
      </List>
      <Divider />
      <List component='nav' aria-label='secondary mailbox folders'>
        <ListItem button>
          <ListItemText primary='Order ID : 20030' />
          <Stepper activeStep={activeStep} orientation='vertical'>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
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
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </ListItem>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <LibraryAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary='Delivered' />
          </ListItem>
        </List>
      </List>
    </div>
  )
}

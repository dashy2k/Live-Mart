import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { Grid } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles(theme => ({
  row : {
    margin : theme.spacing(2)
  }
}))

export default function PositionedSnackbar () {
  const classes = useStyles()
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

  const handleTracking = () => {
    history.push('/orders')
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
        <Grid container justify='center' className={classes.row}>
          {showTracker && <Typography>Your Order Number is : 20030</Typography>}
        </Grid>
        <Grid container justify='center'>
          {showTracker && (
            <Button variant='outlined' color='primary' onClick={handleTracking}>
              Track Order
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

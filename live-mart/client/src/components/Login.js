import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import VerifyOTP from './VerifyOTP'

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
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(https://miro.medium.com/max/7914/0*rkDUK_3g6OhkCzX8)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export default function Login (props) {
  const classes = useStyles()

  const [currentView, setCurrentView] = useState(0)

  const handleView = currentView => {
    console.log(currentView)
    switch (currentView) {
      case 0:
        return <SignInForm viewScreen={setCurrentView} />
        break;
      case 1:
        return <SignUpForm viewScreen={setCurrentView} />
        break;
      case 2:
        return <VerifyOTP viewScreen={setCurrentView} />
        break;
      default :
        return console.log("Error, No Such View")
    }
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {handleView(currentView)}
      </Grid>
    </Grid>
  )
}

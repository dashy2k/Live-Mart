import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import SendIcon from '@material-ui/icons/Send';
import InputAdornment from '@material-ui/core/InputAdornment'
import { Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOpenRounded'
import {Grid,CssBaseline,Paper} from '@material-ui/core'

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
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  googleBtn: {
    width: 400,
    backgroundColor: '#4285F4',
    height: 45,
    borderRadius: 5
  },
  btnText: {
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(1.5, 0, 2)
  },
  FBBtn: {
    width: 400,
    backgroundColor: '#4267b2',
    height: 45,
    borderRadius: 5
  },
  holder: {
    padding: theme.spacing(1)
  },
  line: {
    margin: theme.spacing(2, 0, 2)
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  border: {
    borderBottom: '1px solid lightgray',
    width: '100%'
  },
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: 'lightgray'
  }
}))

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

export default function VerifyOTP () {
  const classes = useStyles()
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SendIcon />
        </Avatar>
        <Typography component='h1' variant='body2' color='textSecondary'>
          {'We have sent you an OTP on your email Address'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              )
            }}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='OTP'
            label='OTP'
            type='password'
            id='otp'
          />
          <Button
            type='submit'
            fullWidth
            href='/dashboard'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Verify OTP
          </Button>
          <Button
            type='submit'
            fullWidth
            href='/dashboard'
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Verify OTP
          </Button>
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
      </Grid>
      </Grid>
  )
}

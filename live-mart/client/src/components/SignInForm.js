import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import InputAdornment from '@material-ui/core/InputAdornment'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

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

const DividerWithText = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  )
}

export default function Login (props) {
  const classes = useStyles()

  const handleSignUp = () => {
    props.viewScreen(1)
  }

  const handleOTPVerification = () => {
    props.viewScreen(2)
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <MailOutlineIcon />
              </InputAdornment>
            )
          }}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <VpnKeyIcon />
              </InputAdornment>
            )
          }}
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          // onCLick={handleOTPVerification}
          href='/dashboard'
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link variant='body2' onClick={handleSignUp}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <DividerWithText>OR</DividerWithText>
        <Grid container justify='center'>
          <Link href='http://localhost:5000/auth/google'>
            Sign in with Google
          </Link>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  )
}
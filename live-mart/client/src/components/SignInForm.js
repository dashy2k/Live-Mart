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
import { Icon } from '@material-ui/core'

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

const icon = () => (
  <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
    />
  </svg>
);

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
  signIn : {
    margin: theme.spacing(3, 0, 2),

  },
  signUp : {
    margin: theme.spacing(0, 0, 2),
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

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
          className={classes.signIn}
          href='/verifyOTP'
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
            <Link variant='body2' href='/signup'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <DividerWithText>OR</DividerWithText>
        <Grid container justify='center'>
          <Button color='primary' variant='contained' className={classes.googleBtn} fullwidth href='http://localhost:5000/auth/google' startIcon={icon()}>
            Sign in with Google
          </Button>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
    </Grid>
    </Grid>
  )
}

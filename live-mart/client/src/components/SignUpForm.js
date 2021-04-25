import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

function Copyright() {
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
    height: '100vh',
    display: 'flex'
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
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(2, 0, 2)
  },
  signinbutton: {
    margin: theme.spacing(0, 0, 2)
  },
  formControl: {
    margin: theme.spacing(0, 0, 1)
  },
  FormLabelclass: {
    margin: theme.spacing(1, 1, 0)
  }
}))

export default function SignUp(props) {

  const classes = useStyles()
  const [state, setState] = React.useState({
    customer: true,
    retailer: false,
    wholesaler: false
  })

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { customer, retailer, wholesaler } = state

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
        </Typography>
            <form className={classes.form} action="http://localhost:5000/userSignup" method="post">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='lname'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type='email'
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='re_password'
                    label='Retype-Password'
                    type='password'
                    id='re_password'
                    autoComplete='current-password'
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component='fieldset'
                    className={classes.FormLabelclass}
                  >
                    <FormLabel component='legend'>Choose Role : </FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={customer}
                            onChange={handleChange}
                            name='customer'
                          />
                        }
                        label='Customer'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={retailer}
                            onChange={handleChange}
                            name='retailer'
                          />
                        }
                        label='Retailer'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={wholesaler}
                            onChange={handleChange}
                            name='wholesaler'
                          />
                        }
                        label='Wholesalers'
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormLabel component='legend' className={classes.formControl}>
                    Location
              </FormLabel>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='address1'
                    label='House No /Flat No / Floor'
                    id='address1'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='address2'
                    label='Society / Street Name'
                    id='address2'
                  />
                </Grid>
              </Grid>
              {/* <p color='red' > {status === 1 ? null : 'Passwords do not match'} </p> */}
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Sign Up
          </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link variant='body2' href='/'>
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </Grid>
    </Grid>
  )
}

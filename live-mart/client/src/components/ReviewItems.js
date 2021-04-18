import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import src1 from './images/cards/tomatoes.jpg'
import src2 from './images/cards/cucumber.jpg'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  },
  root: {
    display: 'flex',
    margin: theme.spacing(1)
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 350
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    alignItems: 'flex-end'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  quantity: {
    padding: theme.spacing(1)
  }
}))

export default function Review () {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={src1} title='Tomatoes' />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h6' variant='h6'>
              Tomatoes
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              ₹ 28.00
            </Typography>
          </CardContent>
        </div>
        <Divider orientation='vertical' flexItem />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography color='textPrimary' variant='h6'>
              ₹ 28.00
            </Typography>
            <Grid container className={classes.controls} justify='flex-end'>
              <TextField
                className={classes.quantity}
                id='outlined-number'
                label='Quantity'
                type='number'
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={1}
              />
              <IconButton aria-label='delete'>
                <DeleteIcon/>
              </IconButton>
            </Grid>
          </CardContent>
        </div>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={src2} title='Tomatoes' />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h6' variant='h6'>
              Cucumber
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              ₹ 34.00
            </Typography>
          </CardContent>
        </div>
        <Divider orientation='vertical' flexItem />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography color='textPrimary' variant='h6'>
              ₹ 68.00
            </Typography>
            <Grid container className={classes.controls} justify='flex-end'>
              <TextField
                className={classes.quantity}
                id='outlined-number'
                label='Quantity'
                type='number'
                InputLabelProps={{
                  shrink: true
                }}
                defaultValue={2}
              />
              <IconButton aria-label='delete'>
                <DeleteIcon/>
              </IconButton>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  )
}

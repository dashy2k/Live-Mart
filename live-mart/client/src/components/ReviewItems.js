import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'

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

export default function Review (props) {
  const classes = useStyles()
  console.log(props)
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={(props.img)} title='Tomatoes' />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h6' variant='h6'>
              {props.name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {'₹' + props.price + '.00'}
            </Typography>
          </CardContent>
        </div>
        <Divider orientation='vertical' flexItem />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography color='textPrimary' variant='h6'>
              {'₹' + props.price * props.quantity + '.00'}
            </Typography>
            <Grid container className={classes.controls} justify='flex-end'>
              <TextField
                id='filled-read-only-input'
                label='Quantity'
                value={props.quantity}
                InputProps={{
                  readOnly: true
                }}
                variant='filled'
              />
              <IconButton aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  )
}

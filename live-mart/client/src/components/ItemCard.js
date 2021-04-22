import { CardActionArea } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { red } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
    margin: theme.spacing(1),
    height: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default function ItemCard (props) {

  const classes = useStyles()
  
  return (
    <Card key={props.id} className={classes.root}>
      <CardActionArea onClick={props.selectedCard}> 
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
          subheader={'₹' + props.price + '.00'}
        />
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

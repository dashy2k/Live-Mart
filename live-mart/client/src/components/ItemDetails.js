import React from 'react'
import onion from './images/items/onion.jpg'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Divider from '@material-ui/core/Divider'
import ReactStars from 'react-rating-stars-component'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { green, red , orange} from '@material-ui/core/colors'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import PeopleIcon from '@material-ui/icons/People'


const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  itemData: {
    padding: theme.spacing(4),
    marginLeft: theme.spacing(2)
  },
  floatButtons: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  inStock: {
    color: '#fff',
    backgroundColor: green[900]
  },
  outStock: {
    color: '#fff',
    backgroundColor: red[500]
  },
  status: {
    backgroundColor: green[100],
    width: 400,
    padding: theme.spacing(2)
  },
  sellerButton : {
      backgroundColor : orange[400],
      color : theme.palette.getContrastText(orange[400]),
      borderRadius : 15,
      margin : theme.spacing(2,0,2),
      width: 400,
  }
}))

export default function ItemDetails () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12}>
          <img width={300} src={onion} alt='wow! Onion is Missing :P'/>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.itemData}>
            <Typography variant='h5'>Onions</Typography>
            <Divider />
            <Typography>Rs 28.00/Kg</Typography>
            <ReactStars count={5} size={40} activeColor='#ffd700' />
            <Chip
              className={classes.status}
              avatar={
                <Avatar>
                  <CheckCircleIcon
                    className={classes.inStock}
                    style={{ color: green[100] }}
                  />
                </Avatar>
              }
              label='Currently in Stock'
              clickable
              variant='outlined'
            />
            <Button startIcon={<PeopleIcon/>} variant='contained' className={classes.sellerButton}>
              View Sellers
            </Button>
            <List
              component='nav'
              aria-label='main mailbox folders'
              subheader={
                <ListSubheader component='div' id='nested-list-subheader'>
                  Authorized Retailers
                </ListSubheader>
              }
            >
              <ListItem button>
                <ListItemText primary='Big Basket' />
              </ListItem>
              <ListItem button>
                <ListItemText primary='Amazon' />
              </ListItem>
            </List>
            <Divider />
            <List component='nav' aria-label='secondary mailbox folders'>
              <ListItem button>
                <ListItemText primary='About' secondary='Onions are cultivated and used around the world. As a food item, they are usually served cooked, 
                as a vegetable or part of a prepared savoury dish, but can also be eaten raw or used to make pickles or chutneys'/>
              </ListItem>
            </List>
            <div className={classes.floatButtons}>
              <Fab color='primary' aria-label='add'>
                <AddIcon />
              </Fab>
              <Fab color='secondary' aria-label='edit'>
                <ShoppingBasketIcon />
              </Fab>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

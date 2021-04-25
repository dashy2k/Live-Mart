import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import FolderIcon from '@material-ui/icons/Folder'
import React from 'react'
import Items from './data/items.json';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}))

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}
function addRetailerItems(items) {

  return (<ListItem>

    <ListItemAvatar>
      <Avatar src={items.img_src}>
        A
      </Avatar>


    </ListItemAvatar>
    <ListItemText
      primary={items.name}
      secondary={"₹" + items.price + "     Qty: " + items.qty}
    />
    <ListItemSecondaryAction>
      <IconButton edge='end' aria-label='delete'>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>)
}


export default function RenderInventory() {
  const classes = useStyles()
  const [secondary, setSecondary] = React.useState(false)

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2} justify='center'>
          <Grid xs={12}>
            <Typography variant='h6' className={classes.title}>
              {'Your Current Inventory'}
            </Typography>
            <div className={classes.demo}>
              <List>

                {Items.map(addRetailerItems)}

              </List>
            </div>
          </Grid>
          <FormGroup row>
            <Fab color='primary' aria-label='add' size='small' variant='extended'>
              <AddIcon /> Add Item
            </Fab>
          </FormGroup>
        </Grid>
      </div>
    </React.Fragment>
  )
}

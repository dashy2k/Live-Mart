import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CategoryIcon from '@material-ui/icons/Category'
import HistoryIcon from '@material-ui/icons/History';
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'

export default function CustomerItems() {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4),
    }
  }))
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary='Categories'  secondary='Shopping'/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding >
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Fruits & Vegetables' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Foodgrains,Oils & Masala' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Bakey,Cakes & Dairy' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Beverages'/>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Snack & Branded Food' />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary='Eggs,Meat & Fish' />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary='Your Orders' />
      </ListItem>
    </List>
  )
  
}


import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import DashboardIcon from '@material-ui/icons/Dashboard'
import React from 'react'

export default function ReatailerItems (props) {
  console.log('RetailerItems')
  console.log(props)

  return (
    <React.Fragment>
    <List
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Retailer Controls
        </ListSubheader>
      }
    >
      <ListItem button onClick={props.handleDashboard}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </List>
    </React.Fragment>
  )
}

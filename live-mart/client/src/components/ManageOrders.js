import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReceiptIcon from '@material-ui/icons/Receipt'
import React from 'react'

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

function generate (element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  )
}

export default function Inventory () {
  const classes = useStyles()
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className={classes.title}>
              Your Transaction History
            </Typography>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ReceiptIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary='Single-line item'
                      secondary={secondary ? 'Secondary text' : null}
                    />
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

import Avatar from '@material-ui/core/Avatar'
import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import BusinessIcon from '@material-ui/icons/Business'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'
import StoreIcon from '@material-ui/icons/Store'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import React, { useState } from 'react'
import Inventory from './ManageInventory'
import Orders from './ManageOrders'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  leafHeader: {
    backgroundColor: 'primary',
    padding: theme.spacing(1),
    color: theme.palette.common.white
  },
  retailerDP: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2)
  },
  dataBox: {
    padding: theme.spacing(2, 2, 2)
  },
  textBox: {
    margin: theme.spacing(0, 2, 0)
  },
  details: {
    padding: theme.spacing(0, 2, 0)
  },
  btn: {
    margin: theme.spacing(2)
  },
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

function BasicTable () {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableBody>
          <TableRow>
            <TableCell component='th' scope='row' align='center'>
              <Typography color='textPrimary' variant='h7'>
                <AccountBoxIcon style={{ fontSize: 30 }} />
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography color='textSecondary' variant='h7'>
                Fresho
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component='th' scope='row' align='center'>
              <Typography color='textPrimary' variant='h7'>
                <BusinessIcon style={{ fontSize: 30 }} />
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography color='textSecondary' variant='h7'>
                Level 4, 20 Farringdon St, Farringdon, London EC4A 4EN, UK
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component='th' scope='row' align='center'>
              <Typography color='textPrimary' variant='h7'>
                <SupervisedUserCircleIcon style={{ fontSize: 30 }} />
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography color='textSecondary' variant='h7'>
                Retailer, Wholesalers
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function RetailerDashboard () {
  const classes = useStyles()

  const [showStores, setShowStores] = useState(false)
  const [showOrders, setShowOrders] = useState(false)

  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  const handleStores = () => {
    setShowStores(!showStores)
    setShowOrders(false)
  }

  const handleOrders = () => {
    setShowOrders(!showOrders)
    setShowStores(false)
  }

  return (
    <React.Fragment>
      <Grid container>
        <Grid container xs={12} className={classes.dataBox}>
          <Grid container justify='center' xs={6}>
            <Avatar
              alt='fresho'
              src={
                'data:image/png;base64,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'
              }
              className={classes.retailerDP}
            />
          </Grid>
          <Grid container justify='center' xs={6}>
            {BasicTable()}
          </Grid>
        </Grid>
        <Grid container xs={12} className={classes.dataBox} justify='flex-end'>
          <Fab
            color='primary'
            aria-label='add'
            variant='extended'
            onClick={handleStores}
            className={classes.btn}
          >
            <PlaylistAddCheckIcon className={classes.extendedIcon} />
            Manage Inventory
          </Fab>
          <Fab
            color='primary'
            aria-label='add'
            variant='extended'
            onClick={handleOrders}
            className={classes.btn}
          >
            <StoreIcon className={classes.extendedIcon} />
            Manage Orders
          </Fab>
          <Grid container flex='center'>
            {showStores && <Inventory />}
            {showOrders && <Orders />}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

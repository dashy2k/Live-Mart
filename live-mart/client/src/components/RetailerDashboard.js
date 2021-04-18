import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import imgsrc from './images/brands/fresho.png'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import { deepPurple } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  leafHeader: {
    backgroundColor: deepPurple[500],
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
  }
}))

function createData (name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Retailer Name', 'Fresho'),
  createData(
    'Retailer Address',
    'Level 2/96 St Georges Bay Rd Parnell, Auckland 1052'
  )
]

function BasicTable () {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row' align='center'>
                {row.name}
              </TableCell>
              <TableCell align='center'>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function RetailerDashboard () {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item className={classes.leafHeader} xs={12}>
        <Paper elevation={1} />
        <Typography variant='h7'>RETAILER INFO</Typography>
      </Grid>
      <Grid item xs={12} className={classes.dataBox}>
        <Grid container justify='center'>
          <Avatar alt='fresho' src={imgsrc} className={classes.retailerDP} />
        </Grid>
        {BasicTable()}
      </Grid>
      <Grid item className={classes.leafHeader} xs={12}>
        <Paper elevation={1} />
        <Typography variant='h7'>ACTIONS</Typography>
      </Grid>
      <Grid item xs={12} className={classes.dataBox}>
        <Button
          className={classes.btn}
          variant='contained'
          color='primary'
          endIcon={<EditIcon />}
        >
          Edit details
        </Button>
        <Button
          variant='contained'
          color='primary'
          className={classes.btn}
          endIcon={<AddCircleOutlineIcon />}
        >
          List New Items
        </Button>
      </Grid>
    </Grid>
  )
}

import React, { useEffect } from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import CustomerItems from './CustomerItems'
import RetailerItems from './RetailerItems'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import ItemCard from './ItemCard'
import ItemDetails from './ItemDetails'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone'
import ShoppingBasketTwoToneIcon from '@material-ui/icons/ShoppingBasketTwoTone'
import userDp from './images/avatars/userDoge.jpg'
import axios from 'axios'

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Dogemart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  toolbar: {
    paddingRight: 20 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  authlink: {
    padding: theme.spacing(0, 1.5, 0)
  },
  profileIcon: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  itemContainer: {
    padding: theme.spacing(2)
  }
}))

export default function Dashboard () {
  let history = useHistory()

  const classes = useStyles()

  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const checkoutToCart = () => {
    history.push('/checkout')
  }

  const handleLogout = () => {
    history.push('/logout')
  }

  const [currentUser, setCurrentUser] = React.useState('')

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:5000/api/current_user').then(response => {
      setCurrentUser(response.data.name)
      console.log(response.data.name)
    })

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
          >
            Live Mart
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Link color='inherit' className={classes.authlink} href='/signup'>
            {'Sign Up'}
          </Link>
          <Link color='inherit' className={classes.authlink} href='/'>
            {'Sign In'}
          </Link>
          <IconButton color='inherit' onClick={checkoutToCart}>
            <Badge color='secondary'>
              <ShoppingBasketTwoToneIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <Badge color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color='inherit'>
            <Badge color='secondary'>
              <ExitToAppTwoToneIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='persistent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <Grid container justify='center'>
            <IconButton>
              <Avatar className={classes.profileIcon} src={userDp}>
                A
              </Avatar>
            </IconButton>
            <Typography color='textSecondary' display='block'>
              Welcome, {currentUser}
            </Typography>
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <CustomerItems />
        <Divider />
        <RetailerItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container className={classes.itemContainer}>
          <Grid container spacing={2}>
            <Grid item xs={4} sm={2}>
              <ItemCard />
              <ItemCard />
            </Grid>
            <Grid item xs={4} sm={2}>
              <ItemCard />
              <ItemCard />
            </Grid>
            <Grid item xs={4} sm={2}>
              <ItemCard />
              <ItemCard />
            </Grid>
            <Grid xs={6} sm={4} spacing={4}>
              <ItemDetails />
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Grid>
      </main>
    </div>
  )
}

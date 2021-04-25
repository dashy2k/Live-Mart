import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as actions from '../actions'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    marginTop: {
        marginTop: theme.spacing(10),

    },
    marginTop2: {
        marginTop: theme.spacing(5),
    },
    root: {
        flexGrow: 1,
    },
    randomButton: {
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(4),
    },
    menuButton: {
        marginRight: theme.spacing(1),
        backgroundColor: "white",
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    body: {
        fontFamily: 'sans - serif',
        // margin: '0 auto',
        // padding: '25px',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
    },

    heading: {
        textAlign: 'center',
        fontSize: '2em',
        color: '#2d3436',
        margin: '20px 0 30px',
    },

    card: {
        borderRadius: '25px',
        position: 'relative',
        padding: '25px 15px',
        backgroundColor: '#81ecec',
        margin: '50px 0',
        height: '300px',
        width: '600px',
        boxShadow: '0 2px 5px #ccc',
        textAlign: 'left',
    },

    top: {
        borderRadius: '25px 25px 0 0',
        height: '100px',
        width: '100%',
        backgroundColor: '#00cec9',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
    },

    name: {
        fontFamily: '',
        paddingLeft: '40px',
        fontSize: '2em',
        color: '#2d3436',
        display: 'flex',
        flex: 1,
        margin: '10 % 20px 0',
    },

    card_img: {
        margin: '30px 20px 0 0',
    },

    circle_img: {
        borderRadius: '50%',
        border: '7px solid #fff',
        width: '150px',
        height: '150px',
    },

    bottom: {
        marginTop: '120px',
    },

    info: {
        fontSize: '18px',
        margin: '20px 0',
        color: '#02475e',
    }

}))


function UserProfile(props) {
    const [feedbackState, setFeedBackState] = React.useState(false);
    const [contactUsState, setContactUsState] = React.useState(false);
    const user = useSelector(state => state.auth)

    const classes = useStyles();

    function Feedback() {
        setContactUsState(false);
        setFeedBackState(true);
    }
    function FeedBackSubmit(event) {
        alert("Your feedback has been successfully submitted");
        setFeedBackState(false);
        event.preventDefault();
    }
    function ContactUs() {
        setFeedBackState(false);
        setContactUsState(true);
    }
    function ContactUsSubmit(event) {
        alert("Thank you for contacting us. Your queries would be addressed within the next 24 hours.");
        setContactUsState(false);
        event.preventDefault();
    }
    return (
        <div className={classes.body}>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Button edge="start" className={classes.menuButton} aria-label="menu" href="http://localhost:3000/dashboard">
                            Back To Dashboard
                        </Button>
                        <Typography variant="h6" className={classes.title}>
                            My Profile
                        </Typography>

                    </Toolbar>
                </AppBar>
            </div>
            <Grid container xs={12}>
                <Grid item xs={6}>
                    <div className={classes.card}>

                        <div className={classes.top}>
                            <h2 className={classes.name} > {user.name}</h2>
                            <img className={classes.circle_img} src={user.picture} alt="avatar_img" />
                        </div>
                        <div className={classes.bottom}>
                            <Typography className={classes.info}> Email: {user.email}</Typography>
                            <Typography className={classes.info}> </Typography>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} >
                    <Grid container xs={12}>
                        <Button variant="contained" color="primary" edge='start' className={classes.randomButton} onClick={Feedback} > Feedback</Button>
                    </Grid>
                    <Grid container xs={12}>
                        <Button variant="contained" color='primary' edge='start' marginTop='5px' onClick={ContactUs}>  Contact us</Button>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    {feedbackState ? <form className='form'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} className={classes.marginTop}>
                                <Typography align='left'> Enter order Id:</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    autoComplete='orderid'
                                    name='orderid'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='orderid'
                                    label='Order id'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align='left'>Enter Feedback:</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    rows={10}
                                    multiline={true}
                                    autocomplete='feedback'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='feedback'
                                    label='Feedback'
                                    name='feedback'
                                    autoComplete='lname'
                                />
                            </Grid>
                        </Grid>
                        <Button variant='contained' color='primary' type='submit' onClick={FeedBackSubmit} className={classes.marginTop2}>
                            Submit
                        </Button>
                    </form> : null}
                    {contactUsState ? <form className='form'>
                        <Grid container xs={12}>
                            <Grid item xs={12} className={classes.marginTop}>
                                <Typography align='left'>Enter your query:</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    rows={10}
                                    multiline={true}
                                    autocomplete='feedback'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='query'
                                    label='Query'
                                    name='query'
                                    autoComplete='lname'
                                />
                            </Grid>
                        </Grid>
                        <Button variant='contained' color='primary' type='submit' onClick={ContactUsSubmit} className={classes.marginTop2}>
                            Submit
                        </Button>
                    </form> : null}
                </Grid>

            </Grid>



        </div>

    )
}

export default connect(null, actions)(UserProfile)

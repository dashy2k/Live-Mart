import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
  },
  buttonProgress: {
    color: green[500],
  },
}));

export default function CircularIntegration() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const timer = React.useRef();
  
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const startProgress = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
        {startProgress()}
      <Grid container justify='center' className={classes.wrapper}>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
        {success && <CheckIcon/>}
      </Grid>
    </div>
  );
}

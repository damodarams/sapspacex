import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    backgroundColor: '#4a9d4a',
    fontSize: '25px',
    color: 'white',
    marginLeft: 0,
    marginRight: -60,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>SpaceX Launch Programs</Paper>
        </Grid>
      
    </div>
  );
}
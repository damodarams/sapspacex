import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    backgroundColor: '#4a9d4a',
    fontSize: '20px',
    color: 'white',
    marginLeft: -60,
    marginRight: -60,
    marginTop : 10,
    paddingTop: 10,
    paddingBottom: 10

  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Developed by Damodaram S</Paper>
        </Grid>
      
    </div>
  );
}
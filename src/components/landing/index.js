import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: '#4a9d4a',
    fontSize: '25px',
    color: 'white'
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Container maxWidth="lg" className ="mt-4"> */}
      {/* <Grid container spacing={3}> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>SpaceX Launch Programs</Paper>
        </Grid>
        {/* </Grid> */}
      {/* </Container> */}
      
    </div>
  );
}
import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import config from './api/blueprint.json';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  buttonstyle: {
      marginBottom: 10
      
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#34d734',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
  gridmargin : {
    marginTop: 30
  },
  fiterbg : {
    backgroundColor: 'white',
    paddingBottom: 25,
    marginBottom: 25,
    marginRight: -10
  },
  cardstyles: {
    paddingLeft :20,
    marginLeft: 10
  },
  filtertext: {
    paddingLeft: 10,
    paddingTop: 6,
    paddingBottom: 4,
    backgroundColor:'#4a9d4a',
    color: 'white'
  },
  cardtitle: {
    color: 'blue'
  }
});

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#008000a6',
    borderColor: '#008000c7',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#008000f2',
      borderColor: '#008000c7',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#008000f2',
      borderColor: '#005cbf',
    },
    '&:focus': {
      backgroundColor: '#008000f2',
      //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function MediaCard( {flightCard,onlaunchyearclick,onSuccessLaunchClick}) {
  const classes = useStyles();

  let _flights = [];
  Array.isArray(flightCard) && flightCard.map(item => {
      _flights.push(
        <Grid item xs ={12} sm ={6} md= {3} className = {classes.cardstyle}>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {item.links && item.links.mission_patch ?  "https://i.ibb.co/GstNZVr/falcon-sat.jpg": item.links.mission_patch}
          title= {item.mission_name} 
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className = {classes.cardtitle}>
          {item.mission_name} # {item.flight_number}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <b>Mission ids: </b> {item.mission_id}<br/>
            <b>Launch Year :</b> {item.launch_year}<br/>
            <b>Successful Launch :</b> {item.launch_success.toString()}<br/>
            <b>Succesful Landing :</b> NA<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      )
  });

  const clickedyear = (year) => {
      onlaunchyearclick(year);
  }

  const clickedlaunchsuccess = (launchsuccess) => {
    onSuccessLaunchClick(launchsuccess)
  }

  const getLaunchYear= () => {
    let launchyear = config.buttons;
    let launchyearfilters = [];


    Array.isArray(launchyear) && launchyear.map(item => {

        launchyearfilters.push(
            <Grid item xs ={6} sm = {6} md = {6}>
            <BootstrapButton variant="contained" size="small"  color="primary" style= {{marginBottom:10}} onClick= { () =>clickedyear(item.key)}>
            {item.label}
          </BootstrapButton>
          </Grid>
        ) 
    });

    return launchyearfilters;
  }

  const getLaunchSuccess = () => {
      let launchsuccess = config.successlaunch;
      let launchsuccessfilters = [];

      Array.isArray(launchsuccess) && launchsuccess.map(item => {
          launchsuccessfilters.push (
            <Grid item xs ={6}  sm = {6} md = {6}>
            <BootstrapButton variant="contained" size="small" color="primary" className={classes.buttonstyle} onClick= { () =>clickedlaunchsuccess(item.key)}>
            {item.label}
          </BootstrapButton>
          </Grid>
          )
      })

      return launchsuccessfilters;
  }

  const getLandingSuccess = () => {
    let landingsuccess = config.successlanding;
    let landingsuccessfilters = [];

    Array.isArray(landingsuccess) && landingsuccess.map(item => {
        landingsuccessfilters.push (
          <Grid item xs ={6}  sm = {6} md = {6}>
          <BootstrapButton variant="contained" size="small" color="primary" className={classes.margin}>
          {item.label}
        </BootstrapButton>
        </Grid>
        )
    })

    return landingsuccessfilters;
}


  return (
    <Container className ={classes.gridmargin}>
    <Grid container >
    <Grid item xs ={12} sm = {4} md = {2} className ={classes.fiterbg}> 
    <Typography gutterBottom variant="h6" component="h6" align="left" className = {classes.filtertext}>
     Filters
          </Typography>

          <Typography gutterBottom variant="h7" component="h4">
     <u>Launch Years</u>
          </Typography>
          <Grid container justify = {"space-between"}>
          {getLaunchYear()}
          </Grid>

          <Typography gutterBottom variant="h7" component="h4">
     <u>Successful Launch</u>
          </Typography>
          <Grid container justify = {"space-between"}>
          {getLaunchSuccess()}
          </Grid>


        <Typography gutterBottom variant="h7" component="h4">
     <u>Successful Landing</u>
          </Typography>
          <Grid container justify = {"space-between"}>
          {getLandingSuccess()}
          </Grid>
    </Grid>


        <Grid item xs ={12} sm = {8} md = {10} className ={classes.cardstyles}>
        <Grid container spacing={3}>
        {_flights}
        </Grid>
        </Grid>
    </Grid>
    
        </Container>
        
    
  );
}
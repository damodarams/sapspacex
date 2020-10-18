import React, { Component } from "react";
import axios from "../../../src/axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MediaCard from '../card';
import config from './api-config.json';

const { baseUrl,launchsuccessEP,launchyearEP,landingsuccessEP} = config;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Home: [],
            flightdata: []
        }
        this.onlaunchyearclick = this.onlaunchyearclick.bind(this)
        this.onSuccessLaunchClick = this.onSuccessLaunchClick.bind(this)
    }
    getUsersData() {
        axios
            .get('/Home', {})
            .then(res => {
                const flightdata = res.data
                console.log(flightdata)
                console.log("damodaram", res.data)
                console.log(JSON.stringify(flightdata))

                this.setState({
                    flightdata: [...flightdata]
                });

            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount(){
        this.getUsersData()
    }

    onlaunchyearclick(year) {
        console.log ("Damodaram year", year)

        if(year) {
             //axios.get(`${baseUrl}&${launchsuccessEP}=true&${landingsuccessEP}=true&${launchyearEP}=${year}`, {})
            axios.get(`${baseUrl}&${launchyearEP}=${year}`, {})
            .then(res => {
                const flightdata = res.data
                console.log(flightdata)
                console.log("mahendra year", res.data)
                console.log(JSON.stringify(flightdata))

                if (Array.isArray(flightdata)){
                    this.setState({
                        flightdata: [...flightdata]
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            })

        }
    }

    onSuccessLaunchClick (launchsuccess) {
        if (launchsuccess) {
            axios.get(`${baseUrl}&${launchsuccessEP}=${launchsuccess}`, {})
            .then(res => {
                const flightdata = res.data
                console.log(flightdata)
                console.log("mahendra year", res.data)
                console.log(JSON.stringify(flightdata))

                if (Array.isArray(flightdata)){
                    this.setState({
                        flightdata: [...flightdata]
                    });
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    
    render (){
        console.log("flight data", this.state.flightdata)
        return (
            <div>
                <React.Fragment>
                    <MediaCard 
                    card1 = {this.state.flightdata}
                    onlaunchyearclick = {this.onlaunchyearclick.bind()}
                    onSuccessLaunchClick = {this.onSuccessLaunchClick.bind()}
                    />

                </React.Fragment>
            </div>
        )
    }
}

export default Home;
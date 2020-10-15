import React, { Component } from "react";
import axios from "../../../src/axios"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Home: []
        }
    }
    getUsersData() {
        axios
            .get('/Home', {})
            .then(res => {
                const data = res.data
                console.log(data)
                console.log(JSON.stringify(data))
                const home = data.map(u =>
                    <div>
                    <p>Flight Number: {u.flight_number}</p>
                    <p>Mission Name: {u.mission_name}</p>
                    <p>Launch Success: {String(u.launch_success)}</p>
                    <p>Launch Year: {u.launch_year}</p>
                    <p>Upcoming: {String(u.upcoming)}</p>
                    <p>Links: {u.links['mission_patch']}</p>
                    </div>
                    )
            this.setState({
                home
            })

            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount(){
        this.getUsersData()
    }
    
    render (){
        return (
            <div>
                {this.state.home}
            </div>
        )
    }
}

export default Home;
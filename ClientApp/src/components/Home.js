import React, { Component } from 'react';
import Title from './Title.js'
import './Main.css'
import Box from '@mui/material/Box';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';

export class Home extends Component {
    static displayName = Home.name;
    constructor() {
        super();
        this.state = { loggedin: "-1" };
    }


    async isUserLoggedIn() {
        fetch("/api/Login").then((response) => (
            response.json()
        )).then((user) => (this.setState({ loggedin : user[0] })));
    }

    componentDidMount() {
        this.isUserLoggedIn();
    }

    render() {
        return (

            <div>
                {this.state.loggedin === "-1" ? <NotLoggedIn /> : <LoggedIn />}
            </div>

        );
    }
}

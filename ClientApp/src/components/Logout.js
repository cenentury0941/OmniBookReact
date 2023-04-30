import React, { Component } from 'react';
import './Main.css'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import cur from './res/auto_logo.png';


export default class Logout extends Component {
    static displayName = Logout.name;
    constructor() {
        super();
        this.state = { signedout: false };
    }


    async logout() {
        fetch("api/User/0").then((response) => (console.log("response read")));
    }

    componentDidMount() {
        this.logout();
    }

    render() {
        return (

            <div>

                    <Stack direction="row" justifyContent="center" style={{ spacing: 100 }} spacing="10px">
                        <img src={cur} alt="logo" style={{ height: 50, width: 50 }} />
                        <h1 style={{
                            display: "flex",
                            alignItems: "center"
                    }}>OmniBook</h1>
                    {this.state.signedout ? <h2 style={{ display: "flex", alignItems: "center" }}>Signed out </h2> : <h2 style={{ display: "flex", alignItems: "center" }}>Signing Out... </h2>}
                    </Stack>

            </div>

        );
    }
}

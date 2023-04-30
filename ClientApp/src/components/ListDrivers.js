import React, { Component } from 'react';
import Title from './Title.js'
import './Main.css'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import CircularProgress from '@mui/material/CircularProgress';
import MediaCard from "./Driver.js";

export default class ListDrivers extends Component {
    static displayName = ListDrivers.name;
    constructor() {
        super();
        this.state = { Drivers : null };
    }


    async getDrivers() {
        fetch("/api/QueryHandler/0").then((response) => (
            response.text()
        )).then((user) => (this.setState({ Drivers : user.split(",") })));
    }

    componentDidMount() {
        this.getDrivers();
    }

    static driverlist(drivers,data) {

        return (
            <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                {drivers.map(dr =>
                    <MediaCard id={dr.split(":")[0]} numplate={dr.split(":")[1]} phno={dr.split(":")[2]} data={data} />
                )}
            </Stack>
            );

    }

    render() {
        return (

            <div>
                {this.state.Drivers === null ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : ListDrivers.driverlist(this.state.Drivers, this.props.data)}
            </div>

        );
    }
}

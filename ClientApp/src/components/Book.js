import React, { Component , useState } from 'react';
import Title from './Title.js'
import TextField from '@mui/material/TextField';
import './Main.css'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';
import { MapContainer, TileLayer, useMap, Marker, Popup , useMapEvents } from 'react-leaflet'
import L from 'leaflet';
import ListDrivers from "./ListDrivers";



export class Book extends Component {
    static displayName = Book.name;
    constructor() {
        super();
        this.state = { showdrivers : false , map: null, end_query: "", start_query: "", start_loc: "Select start location", start_lat: "12.972442", start_lon: "77.580643", end_loc: "Select end location", end_lat: "12.972442", end_lon: "77.580643", price : "0", drivers : null };
    }

    handlestartfield(e) {
        this.setState({
            start_query: e.target.value
        });
    }

    handleendfield(e) {
        this.setState({
            end_query: e.target.value
        });
    }

    async getstartlocation(query) {
        fetch(query).then((response) => (
            response.json()
        )).then((user) => (
            this.setState({ start_loc: user[0].display_name, start_lat: user[0].lat, start_lon: user[0].lon }))
        ).then(console.log(this.state));
    }

    async getendlocation(query) {
        fetch(query).then((response) => (
            response.json()
        )).then((user) => (
            this.setState({ end_loc: user[0].display_name, end_lat: user[0].lat, end_lon: user[0].lon }))
        ).then(console.log(this.state));
    }

    startlocation() {
        var query = "https://nominatim.openstreetmap.org/search.php?q=";
        var start_query = this.state.start_query.split(" ");
        for (let i = 0; i < start_query.length; i++)
        {
            query += "+" + start_query[i];
        }
        query += "&format=jsonv2";
        console.log(query);
        this.getstartlocation(query);
    }

    endlocation() {
        var query = "https://nominatim.openstreetmap.org/search.php?q=";
        var end_query = this.state.end_query.split(" ");
        for (let i = 0; i < end_query.length; i++) {
            query += "+" + end_query[i];
        }
        query += "&format=jsonv2";
        console.log(query);
        this.getendlocation(query);
    }

    async getpricefromserver(query) {
        fetch(query).then((response) => (
            response.text()
        )).then((user) => (
            this.setState({price:user})));
    }

    getprice() {
        var query = "https://omnibook.azurewebsites.net/api/Cost/";
        query += this.state.start_lat + "|" + this.state.start_lon + "|" + this.state.end_lat + "|" + this.state.end_lon;
        console.log(query);
        this.getpricefromserver(query);
    }

    componentDidMount() {
    }

    showdrivers() {
        if (this.state.price === "0") {

        }
        else {
            console.log("cost : " + this.state.cost);
            this.setState({ showdrivers: true });
        }
    }

    render() {


        return (

            <div><Box display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                marginTop="100px"
            >

                <Box
                    backgroundColor="#101010"
                    width="720px"
                    padding="39px"
                    sx={{ borderRadius: '16px' }}
                >
                    <Stack direction="column" justifyContent="center" spacing="39px">

                        <Title />

                        <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                            <h5 style={{
                                display: "flex",
                                alignItems: "center"
                            }}>Pick up</h5>

                            <TextField fullWidth onChange={this.handlestartfield.bind(this)} id="pickup" name="pickup" label="Enter Pick Up Location" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} />
                            <Button variant="outlined" color="success" onClick={this.startlocation.bind(this)}>Search</Button>

                            <TextField fullWidth
                                id="startlocation"
                                label="Detected Location"
                                value={this.state.start_loc}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }}
                                variant="standard"
                            />


                            <div className="map" id="map1">
                                <MapContainer center={[parseFloat(this.state.start_lat), parseFloat(this.state.start_lon)]} zoom={10} scrollWheelZoom={true} whenCreated={map => this.setState({ map })} >

                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={[parseFloat(this.state.start_lat), parseFloat(this.state.start_lon)]}>
                                        <Popup>
                                            Pickup location
                                        </Popup>
                                    </Marker>

                                </MapContainer>
                                </div>


                            <div style={{ height: 10, width: 300, border: 0, borderBottom: 1, borderStyle: "solid", borderColor: "#454545" }}></div>

                        </Stack>


                        <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                            <h5 style={{
                                display: "flex",
                                alignItems: "center"
                            }}>Drop off</h5>

                            <TextField fullWidth onChange={this.handleendfield.bind(this)} id="dropoff" name="dropoff" label="Enter Drop Location" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} />
                            <Button variant="outlined" color="success" onClick={this.endlocation.bind(this)}>Search</Button>
                            <TextField fullWidth
                                id="endlocation"
                                label="Detected Location"
                                value={this.state.end_loc}
                                InputProps={{
                                    readOnly: true,
                                }}
                                sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }}
                                variant="standard"
                            />
                            <div className="map" id="map2">
                                <MapContainer center={[parseFloat(this.state.end_lat), parseFloat(this.state.end_lon)]} zoom={10} scrollWheelZoom={true} hight={500} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                <Marker position={[parseFloat(this.state.end_lat), parseFloat(this.state.end_lon)]}>
                                    <Popup>
                                        Drop location
                                    </Popup>
                                </Marker>
                                </MapContainer>

                            </div>

                            <div style={{ height: 10, width: 300, border: 0, borderBottom: 1, borderStyle: "solid", borderColor: "#454545" }}></div>

                        </Stack>


                        <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                            <h5 style={{
                                display: "flex",
                                alignItems: "center"
                            }}>Estimated Price</h5>

                            <Button variant="outlined" color="success" onClick={this.getprice.bind(this)}>Calculate price</Button>
                            <TextField fullWidth
                                id="cost"
                                label="Estimated price"
                                value={ "INR " + parseInt(this.state.price)}
                                
                                InputProps={{
                                    readOnly: true,
                                    align: "center",
                                }}
                                sx={{ input: { color: '#cccccc', align: "center"} }} InputLabelProps={{ style: { color: '#00aa00' } }}
                                variant="standard"
                            />
                            <div style={{ height: 10, width: 300, border: 0, borderBottom: 1, borderStyle: "solid", borderColor: "#454545" }}></div>

                        </Stack>

                        {this.state.showdrivers ? 
                            <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                                <h5 style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}>Available Drivers</h5>

                                <ListDrivers data={this.state} />

                                <div style={{ height: 10, width: 300, border: 0, borderBottom: 1, borderStyle: "solid", borderColor: "#454545" }}></div>

                            </Stack>
                            :
                            <Button variant="outlined" color="warning" onClick={this.showdrivers.bind(this)}>Find Drivers</Button>
                        }

                    </Stack>
                </Box>
            </Box>
            </div>

        );
    }
}

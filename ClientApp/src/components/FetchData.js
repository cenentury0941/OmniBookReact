import React, { Component } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Ride from "./Ride"
import { Stack } from '@mui/material';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { rides: null , loading: true };
  }

  componentDidMount() {
      this.getRides();
  }

  static renderRides(rides) {
      return (
          <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
              {rides.map(dr =>
                  <Ride data={dr} />
              )}
          </Stack>
      );
  }

  render() {

    return (
        <div>
                <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 , minHeight: 390, paddingTop : 125}} spacing="15px" >
                    <h4 style={{
                        display: "flex",
                    alignItems: "center"
                }}>Your Rides</h4>

                    {this.state.loading === true ? <Box sx={{ display: 'flex' }}><CircularProgress /></Box> : FetchData.renderRides(this.state.rides)}

                </Stack>
        </div>
    );
  }

    async getRides() {
        const response = await fetch('/api/QueryHandler');
        const data = await response.text();
        this.setState({ rides : data.split("|") , loading : false });
      
      console.log(this.state.rides)
  }
}

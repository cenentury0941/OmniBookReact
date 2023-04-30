import React, { Component } from 'react';
import Title from './Title.js'
import './Main.css'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default class LoggedIn extends Component {
    static displayName = LoggedIn.name;

    render() {
        return (

            <div>
                <Box display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    marginTop="25px"
                >
                    <Box
                        backgroundColor="#101010"
                        width="500px"
                        padding="39px"
                        sx={{ borderRadius: '16px' }}
                    >
                        <Stack direction="column" justifyContent="center" spacing="39px">

                            <Title />

                            <Stack direction="row" justifyContent="center" style={{ spacing: 100 }} spacing="10px">
                                <h5>Welcome to Omnibook!</h5>
                            </Stack>

                            <Stack direction="row" justifyContent="center" style={{ spacing: 100 }} spacing="10px">
                                <h7 style={{textAlign: "justify"}}>Omnibook is an online app-less auto booking platform which implements a uniform query based back end enabling a simple, robust and universal platform for booking rides.</h7>
                            </Stack>

                            <Stack direction="col" justifyContent="center" style={{ spacing: 100 }} spacing="205px">
                                <Button variant="outlined" color="secondary" style={{ margin: 5 }} href="./learn">Learn More</Button>
                                <Button variant="outlined" color="warning" style={{ margin: 5 }} href="./guide">Guide</Button>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>

            </div>

        );
    }
}

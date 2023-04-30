import React, { Component } from 'react';
import cur from './res/auto_logo.png';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

export default class Title extends Component {

    render() {
        return (
            <div>

                <Stack direction="row" justifyContent="center" style={{ spacing: 100 }} spacing="10px">
                    <img src={cur} alt="logo" style={{ height: 50, width: 50 }} />
                    <h1 style={{
                        display: "flex",
                        alignItems: "center"
                    }}>OmniBook</h1>
                </Stack>

            </div>
        );
    }
}

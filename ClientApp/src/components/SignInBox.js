
import React, { Component } from 'react';
import cur from './res/auto_logo.png';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Main.css'
import Button from '@mui/material/Button';

export default class SignInBox extends Component {

    render() {

        return (
            <div>

                <form action="/api/Login" method="POST">
                <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                    <h5 style={{
                        display: "flex",
                        alignItems: "center"
                    }}>Sign In</h5>
                    <TextField id="username" name="username" label="username" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} />
                    <TextField id="password" name="password" label="password" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} type="password" />
                    <Button variant="outlined" type="submit" color="success">Sign In</Button>
                    <div style={{ height: 10, width: 300, border: 0, borderBottom: 1, borderStyle: "solid", borderColor: "#454545" }}></div>
                </Stack>
                </form>
    
            </div>
        );
    }
}
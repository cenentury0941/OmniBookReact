
import React, { Component } from 'react';
import cur from './res/auto_logo.png';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Main.css'
import Button from '@mui/material/Button';

export default class SignUpBox extends Component {

    render() {

        return (
            <div>

                <form action="/api/SignUp" method="POST">
                <Stack direction="column" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">
                    <h5 style={{
                        display: "flex",
                        alignItems: "center"
                    }}>Sign Up</h5>

                    <TextField id="username" name="username" label="username" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} />
                    <TextField id="password" name="password" label="password" variant="outlined" sx={{ input: { color: '#cccccc' } }} InputLabelProps={{ style: { color: '#696969' } }} type="password" />
                        <Button variant="outlined" type="submit" color="warning">Sign Up</Button>
                </Stack>
                </form>

            </div>
        );
    }
}
import React, { Component } from 'react';
import Title from './Title.js'
import './Main.css'
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import SignInBox from './SignInBox'
import SignUpBox from './SignUpBox'

export class Home extends Component {
    static displayName = Home.name;

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
                            <SignInBox />
                            <SignUpBox />
                        </Stack>
                    </Box>
                </Box>

            </div>

        );
    }
}

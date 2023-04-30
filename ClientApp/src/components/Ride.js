import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import cur from './res/auto_icon.png';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function Ride(props) {

    var data = props.data.split("_")

    return (

        <Card sx={{ width: 1024, backgroundColor: "#101010", color: "white" }}>

            {props.data.length > 0 ?

                <Stack direction="row" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">

                    <Avatar alt="O" src={cur} style={{ marginRight: 39 }} />

                    <CardContent style={{ width: 800 }} >
                        <Typography gutterBottom variant="body" component="div">
                            Start
                        </Typography>
                        <Typography gutterBottom variant="body" component="div" sx={{ paddingLeft:5 }} >
                            {data[1]}
                        </Typography>
                        <Typography variant="body2">
                            End
                        </Typography>
                        <Typography gutterBottom variant="body" component="div" sx={{ paddingLeft: 5 }} >
                            {data[2]}
                        </Typography>

                        <Typography variant="body2">
                            Date
                        </Typography>
                        <Typography gutterBottom variant="body" component="div" sx={{ paddingLeft: 5 }} >
                            {data[4]}
                        </Typography>

                        <Typography variant="body2">
                            Cost
                        </Typography>
                        <Typography gutterBottom variant="body" component="div" sx={{ paddingLeft: 5 }} >
                            INR {data[3]}
                        </Typography>
                    </CardContent>

                </Stack>

                :
                <div></div>
            }

        </Card>
    );
}
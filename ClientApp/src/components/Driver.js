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

export default function MediaCard(props) {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    async function bookDriver()
    {
        setVisible(true);
        const object = { start : props.data.start_loc , end : props.data.end_loc , did : props.id, cost : props.data.price };
            const response = await fetch('/api/Book', {
                method: 'POST',
                headers: { ContentType: "application/json", Data: JSON.stringify(object) }
            });

            const responseText = await response.text();
            console.log(responseText);
            navigate('/fetch-data');
            //console.log("Booking : " + props.numplate + props.phno + props.data.start_loc)
    }


    return (
        <Card sx={{ width: 540, backgroundColor:"#101010", color:"white" }}>

            <Stack direction="row" alignItems="center" justifyContent="center" style={{ spacing: 100 }} spacing="15px">

                <Avatar alt="O" src={cur} style={{ marginRight: 100 }} />

                <CardContent style={{ width : 170 }} >
                <Typography gutterBottom variant="h7" component="div">
                    {props.numplate}
                </Typography>
                <Typography variant="body2">
                    {props.phno}
                </Typography>
            </CardContent>

                <CardActions>
                    <Button variant="outlined" color="warning" onClick={bookDriver.bind(this)} >Book</Button>
            </CardActions>

            </Stack>
            {visible ? 
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                :
                <Box sx={{ width: '100%' }}>
                </Box>
            }
        </Card>
    );
}
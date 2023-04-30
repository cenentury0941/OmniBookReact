import React, { Component } from 'react';
import Title from './Title.js'
import './Main.css'
import { Stack } from '@mui/material';
    

export class Learn extends Component {
    static displayName = Learn.name;
    constructor() {
        super();
     }


    render() {
        return (
            <Stack direction="row" justifyContent="center" style={{ spacing: 100 , padding : 120 }} spacing="10px">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/ygY2qObZv24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Stack>
        );
    }
}


export class Guide extends Component {
    static displayName = Guide.name;
    constructor() {
        super();
    }


    render() {
        return (
            <Stack direction="row" justifyContent="center" style={{ spacing: 100, padding: 120 }} spacing="10px">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/iksyHmE1JAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Stack>
 );
    }
}
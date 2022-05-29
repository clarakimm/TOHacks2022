import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './Map_style';
import { Marker, MarkerClusterer } from '@react-google-maps/api';

require('dotenv').config()

//import GetLocation from './get_user_location3';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    
    //CENTERING THE MAP
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    
    navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
    });
    
    const coordinates = {lat,lng}

    //ADDING MARKER
    // const marker = new google.maps.Marker({
    //     map,
    //     position: {lat:46, lng:-74},
    // });
    // let map

    // new google.maps.Marker({
    //     position: {lat:46, lng:-76},
    //     icon: SVGMarkerElement,
    //     map:map,
    // });

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options = {''}
                onChange = {''}
                onChildClick = {''}
                id = 'map'
            >
                {/* {markers.map(marker => <Marker key="bestBuy" position={{lat:45, lng: -75}}/>) } */}

            </GoogleMapReact>
        </div>
    );
}

export default Map;
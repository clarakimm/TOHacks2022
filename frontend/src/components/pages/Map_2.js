// import React from "react";
// import Header from "../Header";

// const Map = ({ page }) => {
//   return (
//     <div className="map">
//       <Header />
//       <div>the page is: {page}</div>
//     </div>
//   );
// };

// export default Map;

import React, { useState, useEffect } from 'react';
import {CssBaseline, Grid} from '@material-ui/core';


import Map from '../components/Map/Map';
import Side from '../components/Side/Side';
import GetLocation from '../components/Map/get_user_location3';

const Map_2 = () => {


    return (
        <>
            <CssBaseline/>
            
            <Grid container spacing={3} style={{width:'100%'}}>
                <Grid item xs={12} md={4}>
                    <Side />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>

            </Grid>

            <GetLocation/>
        </>
    );
}

export default Map_2;
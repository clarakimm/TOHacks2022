import React, { useState } from 'react';

  const GetLocation = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
        
        navigator.geolocation.getCurrentPosition((position) => {

            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        });
    

    return (
        <div className="App">
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}


        </div>
    );
}

export default GetLocation;
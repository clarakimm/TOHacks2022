import React from "react";
import Header from "../Header";
import pic from "../map.png"
import Search_button from "../Search_button";

const Map_2 = () => {
  return (
    <div className="map">
      <Header />
      <div style={{ marginLeft: 150 }}>
        <h1 style={{
          color: "#000000",
          fontFamily: "Kumbh Sans",
          fontWeight: "bold",
          fontSize: "50px",
        }}>
        Map
        </h1>
        <div style={{ display: "flex", justifyContent: "right", marginRight: 200 }}>
        <h2 style={{
          textAlign: "left",
          color: "#000000",
          fontFamily: "Kumbh Sans",
          fontWeight: "normal"
        }}>
          Enter your location
        </h2>
        <Search_button />
        <img style = {{
        height: 650,
        width: 950,
        }}  
        src={pic} />
      </div>
      </div>
    </div>
  );
};

// export default Map;

// import React, { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// const Map_2 = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBJdLwOOsF-Eidz6NjWobDku0lekxfZSRg",
//   });
//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// };
// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

// import Map from "../components/Map/Map";
// import Side from "../components/Side/Side";
// import GetLocation from "../components/Map/get_user_location3";

// const Map_2 = () => {
//   return (
//     <>
//       <Header />
//       <CssBaseline />

//       <Grid container spacing={3} style={{ width: "100%" }}>
//         <Grid item xs={12} md={4}>
//           <Side />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Map />
//         </Grid>
//       </Grid>

//       <GetLocation />
//     </>
//   );
// };

export default Map_2;

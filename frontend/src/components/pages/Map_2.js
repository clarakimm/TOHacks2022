import React from "react";
import Header from "../Header";

const Map_2 = () => {
  return (
    <div className="map">
      <Header />
      <div>map</div>
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

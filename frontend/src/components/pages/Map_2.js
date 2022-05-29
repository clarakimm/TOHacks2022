import React from "react";
import Header from "../Header";
import pic from "../map.png";
import Search_button from "../Search_button";

const Map_2 = () => {
  return (
    <div className="map">
      <Header />
      <div className="map-container" style={{ marginLeft: 150 }}>
        <div className="leftHalfMap">
          <h1
            style={{
              color: "#000000",
              fontFamily: "Kumbh Sans",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Map
          </h1>
          <div style={{ justifyContent: "right", marginRight: 200 }}>
            <h2
              style={{
                textAlign: "left",
                color: "#000000",
                fontFamily: "Kumbh Sans",
                fontWeight: "normal",
              }}
            >
              Enter your location
            </h2>
            <form>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter location"
                style={{ width: 350 }}
              ></input>
            </form>
            <Search_button />
          </div>
        </div>
        <div className="rightHalfMap">
          <img
            style={{
              width: 750,
              height: "auto",
            }}
            src={pic}
          />
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

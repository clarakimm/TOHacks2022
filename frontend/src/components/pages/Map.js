import React from "react";
import Header from "../Header";

const Map = ({ page }) => {
  return (
    <div className="map">
      <Header />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Map;
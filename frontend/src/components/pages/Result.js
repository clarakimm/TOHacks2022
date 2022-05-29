import React from "react";
import Header from "../Header";
import DeviceSearch from "../DeviceSearch";

const Result = () => {
  return (
    <div>
      <Header />
      <DeviceSearch submitted={true} />
    </div>
  );
};

export default Result;

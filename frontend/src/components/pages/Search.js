import React from "react";
import Header from "../Header";
import DeviceSearch from "../DeviceSearch";

const Search = () => {
  return (
    <div className="search">
      <Header />
      <DeviceSearch submitted={false} />
    </div>
  );
};

export default Search;

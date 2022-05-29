import React from "react";
import Header from "../Header";
import DeviceSearch from "../DeviceSearch";

const Search = ({ page }) => {
  return (
    <div className="search">
      <Header />
      <DeviceSearch />
    </div>
  );
};

export default Search;
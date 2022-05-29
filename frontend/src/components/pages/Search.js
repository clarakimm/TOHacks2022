import React from "react";
import Header from "../Header";
import DeviceSearch from "../DeviceSearch";

const Search = ({ page }) => {
  return (
    <div className="search">
      <Header />
      <DeviceSearch />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Search;
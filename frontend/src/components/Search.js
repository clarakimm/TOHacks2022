import React from "react";
import Header from "./Header";

const Search = ({ page }) => {
  return (
    <div className="search">
      <Header />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Search;
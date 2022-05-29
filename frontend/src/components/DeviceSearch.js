import React, { useState } from "react";
import "./DeviceSearch.css";
import { Link } from "react-router-dom";

const DeviceSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="header">
      {/* <p>What device would you like to search for?</p> */}
      <form action="http://127.0.0.1:5000/" method="POST">
        {/* <input type="text" id="fname" name="fname"/><br></br> */}
        <label for="search">What device would you like to search for?</label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter device name"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default DeviceSearch;

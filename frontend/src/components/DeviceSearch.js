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
        <label for="search" style={{ fontFamily: "Kumbh Sans" }}>
          What device would you like to search for?
        </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter device name"
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
            // change the page state
          }}
        />
        {/* this component should have a nonsubmit state and a submitted state */}
        {/* we render differneent things depending on the submit state */}
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default DeviceSearch;

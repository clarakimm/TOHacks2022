import React from "react";
import "./DeviceSearch.css";
import { Link } from "react-router-dom";

const DeviceSearch = () => {
  return (
    <div className="header">
      {/* <p>What device would you like to search for?</p> */}
      <form>
        {/* <input type="text" id="fname" name="fname"/><br></br> */}
        <label for="fname">What device would you like to search for?</label>
        <input type="text" id="fname" name="firstname" placeholder="Enter device name"></input>
        <input type="submit" value="Search"></input>
      </form>
      
    </div>
  );
};

export default DeviceSearch;

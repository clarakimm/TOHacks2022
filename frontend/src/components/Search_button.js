import React from "react";
import { Link } from "react-router-dom";

const Search_button = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/search">
        <button
          variant="contained"
          style={{
            // float: "center",
            // textAlign: "center",
            fontFamily: "Kumbh Sans",
            fontWeight: "500",
            alignSelf: "center",
            padding: "10px 50px",
            fontSize: "1.0em",
            backgroundColor: "#465362",
            borderRadius: "10px",
            color: "white",
            border: "solid 2px grey",
          }}
        >
          Enter
        </button>
      </Link>
    </div>
  );
};

export default Search_button;

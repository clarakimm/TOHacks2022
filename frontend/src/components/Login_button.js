import React from "react";
import { Link } from "react-router-dom";

const Login_button = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/search">
        <button
          variant="contained"
          style={{
            float: "center",
            textAlign: "center",
            fontFamily: "Kumbh Sans",
            fontWeight: "500",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            textAlignVertical: "center",
            alignContent: "center",
            padding: "10px 50px",
            fontSize: "1.5em",
            backgroundColor: "#516b5f",
            borderRadius: "10px",
            color: "white",
            border: "solid 2px grey",
          }}
        >
          Search for a Device
        </button>
      </Link>
    </div>
  );
};

export default Login_button;

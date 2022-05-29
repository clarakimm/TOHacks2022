import React from "react";
import "../index.css";
import Login_button from "./Login_button";

const Page1_body = () => {
  return (
    <div style={{ marginBottom: "110px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#000000",
          fontFamily: "Kumbh Sans",
          fontWeight: "bold",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
          alignContent: "center",
          fontSize: "50px",
        }}
      >
        Welcome to ...
      </h1>
      <h2
        style={{
          textAlign: "center",
          color: "#000000",
          fontFamily: "Kumbh Sans",
          fontWeight: "normal",
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
          alignContent: "center",
        }}
      >
        Combating e-waste, one device at a time
      </h2>
      <Login_button />
    </div>
  );
};

export default Page1_body;

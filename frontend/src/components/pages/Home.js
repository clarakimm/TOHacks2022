import React from "react";
import Header from "../Header";
import Page1_body from "../Page1_body";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Page1_body />
      </div>
    </div>
  );
};

export default Home;

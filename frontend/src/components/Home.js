import React from "react";
import Header from "./Header";
import Page1_body from "./Page1_body";

const Home = ({ page }) => {
  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Page1_body />
        {/* the page is: {page} */}
        </div>
    </div>
  );
};

export default Home;

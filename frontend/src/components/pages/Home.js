import React from "react";
import Header from "../Header";

const Home = ({ page }) => {
  return (
    <div className="home">
      <Header />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Home;

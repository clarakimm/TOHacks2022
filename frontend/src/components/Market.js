import React from "react";
import Header from "./Header";

const Market = ({ page }) => {
  return (
    <div className="market">
      <Header />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Market;
import React from "react";
import Header from "../Header";
import MarketItem from "../MarketItem";

const Market = ({ page }) => {
  return (
    <div className="market">
      <Header />
      <h1>MARKETPLACE</h1>
      <MarketItem />
      <MarketItem />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Market;
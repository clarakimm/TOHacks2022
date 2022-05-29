import React from "react";
import Header from "../Header";
import MarketItem from "../MarketItem";

const Market = ({ page }) => {
  const data = [
    {
      name: "iPhone 11",
      cost: "$400",
      image: "iPhone11.png",
    },
  ];

  return (
    <div className="market">
      <Header />
      <h1>MARKETPLACE</h1>
      <img src="iPhone11.png" alt="" />
      <MarketItem />
      <MarketItem />
      <div>the page is: {page}</div>
    </div>
  );
};

export default Market;

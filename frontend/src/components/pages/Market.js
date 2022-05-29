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
    {
      name: "iPhone X",
      cost: "$300",
      image: "iphonex.png",
    },
    {
      name: "iPhone 12",
      cost: "$600",
      image: "iPhone12.png",
    },
    {
      name: "Huawei P30 Pro",
      cost: "$450",
      image: "huaweip30pro.png",
    },
    {
      name: "Huawei P40 Pro Plus",
      cost: "$700",
      image: "huaweiP40ProPlus.png",
    },
    {
      name: "Samsung Galaxy S10",
      cost: "$200",
      image: "s10.png",
    },
    {
      name: "Samsung Galaxy S20",
      cost: "$500",
      image: "s20.png",
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      cost: "$800",
      image: "s21ultra.png",
    }
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

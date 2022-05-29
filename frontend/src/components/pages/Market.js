import React from "react";
import Header from "../Header";
import MarketItem from "../MarketItem";

const Market = () => {
  const datas = [
    {
      name: "iPhone 11",
      cost: "$400",
      image: "iPhone11g.png",
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
      name: "Samsung Galaxy S21",
      cost: "$800",
      image: "s21ultra.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="market">
        <h1 style={{ fontSize: "2.3em" }}>MARKETPLACE</h1>
        <h2>Devices</h2>
        <div className="marketMapContainer">
          {datas.map((data) => (
            <MarketItem name={data.name} cost={data.cost} image={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Market;

import React from "react";
import "./MarketItem.css";
import { Link } from "react-router-dom";

const MarketItem = ({ name, cost, image }) => {
  return (
    <div className="marketItemContainer">
      <div style={{ textAlign: "center" }}>
        <img src={image} alt={`Image of ${name}`} />
      </div>
      <div className="marketData">
        <p style={{ marginBottom: "-10px", fontSize: "1.2em" }}>{name}</p>
        <p className="marketItem">{cost}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          type="submit"
          value="View More"
          style={{
            width: "70%",
            fontSize: "1em",
            marginTop: "-4px",
          }}
        ></input>
      </div>
    </div>
  );
};

export default MarketItem;

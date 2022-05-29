import React from "react";
import "./MarketItem.css";
import { Link } from "react-router-dom";

const MarketItem = () => {
  return (
    <div className="container">
      <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI=" alt="Italian Trulli"></img>
      <p>iPhone 11</p>
      <p2>$400</p2>
      <input type="submit" value="Search"></input>
    </div>
  );
};

export default MarketItem;

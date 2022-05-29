import React from "react";
import "./MarketItem.css";
import { Link } from "react-router-dom";

const MarketItem = () => {
  return (
    <div className="container">
      <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=612x612&w=0&h=jPhUdbj_7nWHUp0dsKRf4DMGaHiC16kg_FSjRRGoZEI=" alt="Italian Trulli"></img>
      <p style={{
                textAlign: 'center',
                color: '#000000',
                fontFamily: 'Kumbh Sans',
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                alignContent: 'center',
                fontSize: '25px'
            }}>iPhone 11</p>
      <p style={{
                textAlign: 'center',
                color: '#000000',
                fontFamily: 'Kumbh Sans',
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
                alignContent: 'center',
                fontSize: '15px'
            }}>$400</p>
      <input type="submit" value="Search"></input>
    </div>
  );
};

export default MarketItem;

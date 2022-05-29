import React from "react";
import './Header.css';
//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">LOGO</a>
        </section>
        <section className="header-top_navbar">
          <section className="header-top_navigation">
            <a href ="/" className="navbar-item">SEARCH</a>
            <a href ="/" className="navbar-item">MARKETPLACE</a>
            <a href ="/" className="navbar-item">MAP</a>
          </section>
          <hr className="header-top_seperator"/>
        </section>
      </section>
    </section>
  );
};

export default Header;

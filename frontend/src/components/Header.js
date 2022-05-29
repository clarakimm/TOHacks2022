import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header_logo">
          <Link to="/" className="logo">
            LOGO
          </Link>
        </section>
        <section className="header_navbar">
          <section className="header-top__navigation">
            <Link to="/search" className="navbar-item">
              SEARCH
            </Link>
            <Link to="/market" className="navbar-item">
              MARKETPLACE
            </Link>
            <Link to="/map" className="navbar-item">
              MAP
            </Link>
          </section>
          <hr className="header-top_seperator" />
        </section>
      </section>
    </section>
  );
};

export default Header;

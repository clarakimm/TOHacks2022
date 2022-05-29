import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="real-header">
      <Link to="/" className="logo">
        LOGO
      </Link>
      <div className="nav-container">
        <Link to="/search" className="navbar-item">
          SEARCH
        </Link>
        <Link to="/market" className="navbar-item">
          MARKETPLACE
        </Link>
        <Link to="/map" className="navbar-item">
          MAP
        </Link>
      </div>
    </header>
  );
};

export default Header;

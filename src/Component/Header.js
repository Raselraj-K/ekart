import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <Link to="/dashboard" className="header_icon">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="header_icon"
        />
      </Link>
      <div className="header_search_bar">
        <input
          className="header_search_input"
          type="text"
          placeholder="Search amazon.in"
        />
        {/* <SearchIcon className="header_search_icon" /> */}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link style={{ color: "#fff" }} to="/about">
          About Us
        </Link>
        <Link style={{ color: "#fff" }} to="/contact">
          Contact Us
        </Link>
        <Link style={{ color: "#fff" }} to="/">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const known = ["About Us", "Careers", "Press Releases", "Amazon Science"];
  const connect = ["Facebook", "Twitter", "Instagram"];
  const make_money = [
    "Sell on Amazon",
    "Sell under Amazon Accelerator",
    "Protect and Build Your Brand",
    "Amazon Global Selling",
    "Become an Affiliate",
    "Fulfilment by Amazon",
    "Advertise Your Products",
    "Amazon Pay on Merchants",
  ];
  const help = [
    "COVID-19 and Amazon",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Amazon App Download",
    "Help",
  ];
  const location = [
    "Australia",
    "Brazil",
    "Canada",
    "China",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Poland",
    "Singapore",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
  ];
  return (
    <div className="footer_container">
      <div className="top">
        <div className="known">
          <span className="section_title">Get to Known Us</span>
          {known.map((list) => {
            return (
              <div
                style={{ marginTop: "10px", color: "#DDD", fontSize: "13px" }}
              >
                {list}
              </div>
            );
          })}
        </div>
        <div className="connect">
          <span className="section_title">Connect with Us</span>
          {connect.map((list) => {
            return (
              <div
                style={{ marginTop: "10px", color: "#DDD", fontSize: "13px" }}
              >
                {list}
              </div>
            );
          })}
        </div>
        <div className="make_money">
          <span className="section_title">Make money with Us</span>
          {make_money.map((list) => {
            return (
              <div
                style={{ marginTop: "10px", color: "#DDD", fontSize: "13px" }}
              >
                {list}
              </div>
            );
          })}
        </div>
        <div className="help">
          <span className="section_title">Let Us help You</span>
          {help.map((list) => {
            return (
              <div
                style={{ marginTop: "10px", color: "#DDD", fontSize: "13px" }}
              >
                {list}
              </div>
            );
          })}
        </div>
      </div>
      <div className="location">
        <Link to="/">
          <img
            className="icon"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header_icon"
          />
        </Link>
        <div className="list">
          {location.map((list) => {
            return (
              <div style={{ color: "#DDD", fontSize: "13px", fontWeight: 500 }}>
                {list}
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <p className="copy_rights">
          Conditions of Use & Sale Privacy Notice Interest-Based Ads ©
          1996-2023, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Footer;

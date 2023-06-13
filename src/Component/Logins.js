import alertify from "alertifyjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "alertifyjs/build/css/alertify.css";

function Logins() {
  const [countryCode, setCountryCode] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("logged_user_id");
    localStorage.removeItem("access_token");
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(countryCode);
    console.log(phoneNumber);
    const login = await axios.post(
      "http://ecommerce.toou.in:4011/customer/phonelogin",
      {
        country_code: countryCode,
        phone_number: phoneNumber,
      }
    );
    if (login.data.status) {
      alertify.success(login.data.message);
      navigate("/dashboard");
      localStorage.setItem("logged_user_id", login.data.data.id);
      localStorage.setItem("access_token", login.data.data.access_token);
    } else {
      alertify.error(login.data.message);
    }
  };
  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_form">
        <h3 className="title">Login</h3>
        <div>
          <label htmlFor="user_name">
            Country code
            <span style={{ color: "red", fontWeight: "700" }}>*</span>
          </label>
          <select
            id="county_code"
            name="county_code"
            value={countryCode}
            onChange={(e) => {
              setCountryCode(e.target.value);
            }}
          >
            <option value={""}>{"Selecy country code"}</option>
            <option value={"+91"}>+91</option>
            <option value={"+92"}>+92</option>
            <option value={"+93"}>+93</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">
            Phone number
            <span style={{ color: "red", fontWeight: "700" }}>*</span>
          </label>
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            autoComplete="off"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Logins;

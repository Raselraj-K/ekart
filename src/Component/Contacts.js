import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("logged_user_id");
    const token = localStorage.getItem("access_token");
    console.log(userId);
    if (userId || token === null || userId || token === "") {
      console.log("s");
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Header />
      <div id="contact">
        <h1>Contact us</h1>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://m.media-amazon.com/images/G/31/img21/MA2023/BOTW23/June/ACS_Men_3000x770._CB588079458_.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;

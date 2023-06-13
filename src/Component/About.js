import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("logged_user_id");
    const token = localStorage.getItem("access_token");
    console.log(userId);
    console.log(token);
    if (userId || token === null || userId || token === "") {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Header />
      <div id="about">
        <h1>About us</h1>
        <div>
          <img
            style={{ width: "100%" }}
            src="https://m.media-amazon.com/images/G/31/img21/MA2023/EOSS/PO-5pc._CB603300969_.gif"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

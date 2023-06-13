import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Category({ CategoryList }) {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("logged_user_id");
    const token = localStorage.getItem("access_token");
    if (userId && token === "") {
      navigate("/");
    }
  });
  return (
    <div className="product">
      <span className="product_heading">{CategoryList.name}</span>
      <div className="product_image">
        <img
          src="https://m.media-amazon.com/images/I/614AipEWSIL._AC_UL480_FMwebp_QL65_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Category;

/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Product from "./Product";
import Category from "./Category";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem("logged_user_id");
    const token = localStorage.getItem("access_token");
    console.log(userId, token);
    if ((userId && token === null) || (userId && token === "")) {
      navigate("/");
    } else {
      fetchProduct();
    }
  }, []);
  const fetchProduct = async () => {
    const loggedUserId = "6375c65d9add22a82fa78b04";
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const latlng = "11.025378,76.9758161";
    const productsList = await axios.get(
      `http://ecommerce.toou.in:4011/customer/product_dashboard?id=${loggedUserId}&geotag=${latlng}`,
      config
    );
    setProductList(productsList.data.data);
    // console.log(productsList.data.data);
  };
  return (
    <div>
      <Header />

      <div>
        <h1>Banner</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {productList?.map((product, i) => {
            return product?.Banner.map((item) => {
              return <Product ProductDetails={item} />;
            });
          })}
        </div>
        <h1>Category</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {productList?.map((product, i) => {
            return product.Category?.map((item) => {
              return <Category CategoryList={item} />;
            });
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;

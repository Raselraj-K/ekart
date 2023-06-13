import React, { useEffect } from "react";

function Product({ ProductDetails }) {
  return (
    <div className="product">
      <span className="product_heading">{ProductDetails.title}</span>
      <div className="product_image">
        <img
          src="https://m.media-amazon.com/images/I/81COYd5sJ4L._SX425_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Product;

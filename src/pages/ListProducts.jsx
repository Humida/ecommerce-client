import React from "react";
import "../style/listProducts.css";

function ListProducts(props) {
  return (
    <div id="list-products">
      <div className="filter-product"></div>
      <div className="list-product__container"></div>
    </div>
  );
}

export default ListProducts;

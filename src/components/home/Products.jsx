import React from "react";
import Cart from "../Cart";

function Products(props) {
  const { title } = props;
  return (
    <div id="train">
      <div className="products__container">
        <div className="products__header">
          <h2 className="products__header-title">{title}</h2>
          <div className="products__header-nav">
            <ul>
              <li>shirt</li>
              <li>trousers</li>
              <li>view all</li>
            </ul>
          </div>
        </div>
        <div className="products__body">
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default Products;

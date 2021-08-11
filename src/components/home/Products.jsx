import React from "react";
import Card from "../Card";
import PropTypes from "prop-types";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Products.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
  tab: PropTypes.string,
};
function Products(props) {
  const { title, tab, products } = props;
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div id="train">
      <div className="products__container">
        <div className="products__header">
          <h2 className="products__header-title">{title}</h2>
          <div className="products__header-nav">
            <ul>
              {/* {tab &&
                tab.map((tab) => {
                  return <li key={tab}>{tab}</li>;
                })} */}
              <li>view all</li>
            </ul>
          </div>
        </div>
        <div className="products__body">
        
            {products !== undefined &&
              products.map((product) => {
                return <Card key={product._id} product={product}></Card>;
              })}
        </div>
      </div>
    </div>
  );
}

export default Products;

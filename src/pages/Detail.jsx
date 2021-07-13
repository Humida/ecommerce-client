import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import DetailProduct from "../components/detail/DetailProduct";
import Product from "../components/home/Products";

import "../style/detail.css";

import { useRecoilValue } from "recoil";

import detailState from "../state/detail.state";

Detail.propTypes = {};

function Detail(props) {
  const detail = useRecoilValue(detailState);

  return (
    <div id="details">
      <Header></Header>
      {Object.keys(detail).length !== 0 && (
        <DetailProduct product={detail}></DetailProduct>
      )}
      <Product />
      <Footer></Footer>
    </div>
  );
}

export default Detail;

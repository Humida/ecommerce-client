import React from "react";
import { useState, useEffect } from "react";

import Cart from "../components/home/Cart";
import Header from "../components/home/Header";
import Type from "../components/home/Type";
import Products from "../components/home/Products";
import Categories from "../components/home/Categories";
import Post from "../components/home/Post";
import Footer from "../components/home/Footer";
import "../style/home.css";

// import react slick

// import api
import productApi from "../api/product.api";
function Home(props) {
  const getProduct = productApi.getProduct;
  const [trending, setTrending] = useState([]);
  const [shirt, setShirt] = useState([]);
  const [trousers, setTrousers] = useState([]);

  useEffect(() => {
    let query = "sort=-price";

    (async () => {
      try {
        const products = await getProduct(query, 1, 4);
        setTrending(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  useEffect(() => {
    let query = "classify=shirt&sort=-quantitySold";

    (async () => {
      try {
        const products = await getProduct(query, 1, 4);
        console.log(products);
        setShirt(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);
  useEffect(() => {
    let query = "classify=trouser&sort=-quantitySold";

    (async () => {
      try {
        const products = await getProduct(query, 1, 4);
        setTrousers(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  return (
    <div id="home">
      <Header />
      <Type />
      <Products
        products={trending.products}
        title="Trending this week"
        tab={["shirt", "trousers"]}
      />

      <Products
        products={shirt.products}
        title="New products"
        tab={["shirt", "trousers"]}
      />
      <Products
        products={trousers.products}
        title="Trousers products"
        tab={["shirt", "trousers"]}
      />
      <Categories />
      <Post />
      <Footer />
    </div>
  );
}

export default Home;

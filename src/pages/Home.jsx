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
    const conditions = {
      type: {},
      sort: {
        quantitySold: -1,
      },
    };

    (async () => {
      try {
        const products = await getProduct(conditions, 1, 6);

        setTrending(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  useEffect(() => {
    const conditions = {
      type: {
        classify: "shirt",
      },
      sort: {},
    };

    (async () => {
      try {
        const products = await getProduct(conditions, 1, 4);

        setShirt(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);
  useEffect(() => {
    const conditions = {
      type: {
        classify: "trousers",
      },
      sort: {},
    };
    (async () => {
      try {
        const products = await getProduct(conditions, 1, 4);
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
        title="trousers products"
        tab={["shirt", "trousers"]}
      />
      <Categories />
      <Post />
      <Footer />
    </div>
  );
}

export default Home;

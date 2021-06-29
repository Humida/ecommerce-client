import React from "react";
import Header from "../components/home/Header";
import Type from "../components/home/Type";
import Products from "../components/home/Products";
import Categories from "../components/home/Categories";
import Post from "../components/home/Post";
import Footer from "../components/home/Footer";
import "../style/home.css";
function Home(props) {
  return (
    <div id="home">
      <Header />
      <Type />
      <Products title="Trending this week" tab={["shirt", "trousers"]} />
      <Products title="New products" tab={["shirt", "trousers"]} />
      <Products title="Sale products" tab={["shirt", "trousers"]} />
      <Categories />
      <Post />
      <Footer />
    </div>
  );
}

export default Home;

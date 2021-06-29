import React from "react";
import Header from "../components/home/Header";
import Type from "../components/home/Type";
import Products from "../components/home/Products";
import "../style/home.css";
function Home(props) {
  return (
    <div id="home">
      <Header />
      <Type />
      <Products title="trending this week" />
      <Products title="Shirt" />
      <Products title="Trousers" />
    </div>
  );
}

export default Home;

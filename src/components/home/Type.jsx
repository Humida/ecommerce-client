import React from "react";
import PropTypes from "react";

function Type(props) {
  return (
    <div id="type">
      <div className="type__container">
        <TypeItem url="https://images.unsplash.com/photo-1519554318711-aaf73ece6ff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
        <TypeItem url="https://images.unsplash.com/photo-1585914924626-15adac1e6402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" />
        <TypeItem url="https://images.unsplash.com/photo-1610906597362-174c5a3fa7d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=656&q=80" />
      </div>
    </div>
  );
}

function TypeItem(props) {
  const url = props.url;
  return (
    <div className="type__item">
      <img src={url} alt="" className="type__item-image" />
      <h2 className="type__item-title">Shirt</h2>
      <p className="type__item-more">More</p>
      <div className="overlay"></div>
    </div>
  );
}

export default Type;

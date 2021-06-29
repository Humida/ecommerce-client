import React from "react";

function Type(props) {
  return (
    <div id="type">
      <div className="type__container">
        <TypeItem />
        <TypeItem />
        <TypeItem />
      </div>
    </div>
  );
}

function TypeItem(props) {
  return (
    <div className="type__item">
      <img
        src="https://images.unsplash.com/photo-1624571032416-f86c480bf2b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        alt=""
        className="type__item-image"
      />
      <h2 className="type__item-title">Shirt</h2>
      <p className="type__item-more">More</p>
      <div className="overlay"></div>
    </div>
  );
}

export default Type;

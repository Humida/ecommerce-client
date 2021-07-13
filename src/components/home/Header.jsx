import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Cart from "./Cart";
Header.propTypes = {
  handleHideCart: PropTypes.func,
};

function Header(props) {
  const [hideCart, setHideCart] = useState(true);
  function handleHideCart() {
    setHideCart(!hideCart);
  }

  return (
    <header id="header">
      <div className="header__left">doo</div>
      <nav id="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Shirt</Link>
          </li>
          <li>
            <Link>Trousers</Link>
          </li>
        </ul>
      </nav>
      <div className="header__right">
        <i className="header__right-cart header__right-icon">
          <svg
            onClick={handleHideCart}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
          <Cart display={hideCart} handleHideCart={handleHideCart}></Cart>
        </i>
        <i className="header__right-user header__right-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
        </i>

        <i className="header__right-search header__right-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </i>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { useState } from "react";

import { FaAccessibleIcon } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiUser, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/all";

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

  // mobie
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  function handleMenu() {
    setIsActiveMenu(!isActiveMenu);
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
            <Link to="/shirt">Shirt</Link>
          </li>
          <li>
            <Link to="/trouser">Trousers</Link>
          </li>
        </ul>
      </nav>
      <div className="header__right">
        <i className="header__right-cart header__right-icon">
          <HiOutlineShoppingCart onClick={handleHideCart} />
          <Cart display={hideCart} handleHideCart={handleHideCart}></Cart>
        </i>
        <i className="header__right-user header__right-icon">
          <BiUser />
        </i>

        <i className="header__right-search header__right-icon">
          <BiSearchAlt2 />
        </i>
      </div>

      <div className="header__mobie">
        <i className="header__mobie-menu">
          {!isActiveMenu ? (
            <AiOutlineMenu onClick={handleMenu} />
          ) : (
            <AiOutlineClose onClick={handleMenu} />
          )}
        </i>
        <h2>DOO</h2>
        <i className="header__mobie-cart">
          <HiOutlineShoppingCart />
        </i>
        {isActiveMenu && (
          <div className="header__mobie-sub">
            <div className="header__mobie-sub-nav">
              <i>
                <BiUser />
              </i>
              <i>
                <BiSearchAlt2 />
              </i>
              <i>
                <HiOutlineShoppingCart />
              </i>
            </div>
            <ul className="header__mobie-sub-menu">
              <li>
                <a href="">shirt</a>
                <ul>
                  <li>
                    <a href="">Ao dai</a>
                  </li>
                  <li>
                    <a href="">Ao ngan</a>
                  </li>
                  <li>
                    <a href="">Ao thun</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">trouser</a>
                <ul>
                  <li>
                    <a href="">Quan dai</a>
                  </li>
                  <li>
                    <a href="">Quan ngan</a>
                  </li>
                  <li>
                    <a href="">Quan thun</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

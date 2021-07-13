import React from "react";
import { Link } from "react-router-dom";

import orderState from "../state/order.state";
import detailState from "../state/detail.state";

import { useRecoilState, useSetRecoilState } from "recoil";

function Card(props) {
  const product = props.product;
  const [order, setOrder] = useRecoilState(orderState);
  const setDetail = useSetRecoilState(detailState);

  function handleAddItem() {
    const orderItem = {
      product: product,
      quantity: 1,
    };
    if (order.length == 0) {
      setOrder([orderItem]);
    } else {
      let isExist = false;
      let listOrder = order.map((item) => {
        if (item.product._id == orderItem.product._id) {
          const itemOrder = Object.assign({}, item, {
            quantity: item.quantity + 1,
          });
          isExist = true;
          return itemOrder;
        }
        return item;
      });
      if (!isExist) {
        listOrder = [...listOrder, orderItem];
      }
      setOrder(listOrder);
    }
  }

  function detailProduct() {
    setDetail(product);
  }

  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src="https://images.unsplash.com/photo-1624588483556-851e7726b9fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
          alt=""
        />
      </div>
      <div className="card__desc">
        <h2 className="card__desc-name">{product.nameProduct}</h2>
        <p className="card__desc-price">{product.price}</p>
      </div>
      <div className="overlay-card"></div>
      <div className="card__option">
        <Link to="/detail" onClick={detailProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-card-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
            <path d="M15 6h6m-3 -3v6" />
          </svg>
        </Link>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </svg>
        </Link>
        <Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-details"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000000"
            fill="none"
            strokeLineCap="round"
            strokeLineJoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
            <path d="M12 3v16" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Card;

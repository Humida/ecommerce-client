import React from "react";
import { useRecoilState } from "recoil";
import orderState from "../../state/order.state";
import { Link } from "react-router-dom";

function Cart(props) {
  const [order, setOrder] = useRecoilState(orderState);
  const { display, handleHideCart } = props;

  function handleDelete(e) {
    const id = e.target.id;

    const orderUpdate = order.filter((item) => item.product._id != id);

    setOrder(orderUpdate);
  }

  function handleIncrease(e) {
    const id = e.target.id;

    const updateOrder = order.map((item) => {
      return item.product._id == id
        ? Object.assign({}, item, { quantity: item.quantity + 1 })
        : item;
    });

    setOrder(updateOrder);
  }

  function handleDecrease(e) {
    const id = e.target.id;

    const updateOrder = order.map((item) => {
      return item.product._id == id
        ? Object.assign({}, item, {
            quantity: item.quantity - 1 >= 0 ? item.quantity - 1 : 0,
          })
        : item;
    });
    setOrder(updateOrder);
  }

  return (
    <div className="cart" style={{ display: display ? "none" : "block" }}>
      <div className="cart__header">
        <i onClick={handleHideCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
          </svg>
        </i>
        <h2>CART</h2>
      </div>
      <div className="cart__body">
        {order.length == 0 ? (
          <div className="empty-cart">Cart empty</div>
        ) : (
          order.map((product) => {
            return (
              <CartItem
                key={product._id}
                infoProduct={product}
                handleDelete={handleDelete}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
              />
            );
          })
        )}
      </div>
      <div className="cart__checkout">
        <Link to="/checkout">check out</Link>
      </div>
    </div>
  );
}

function CartItem(props) {
  const { handleDelete, infoProduct, handleIncrease, handleDecrease } = props;
  const product = infoProduct.product;
  return (
    <div className="cart__item">
      <img
        src="https://images.unsplash.com/photo-1625481474472-79e347310ffd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        alt=""
      />
      <div className="cart__item-desc">
        <h2>{product.nameProduct}</h2>
        <p className="cart__item-desc-price">{product.price}</p>
        <div className="cart__item-quantity">
          <span
            style={{ cursor: "pointer" }}
            onClick={handleDecrease}
            id={product._id}
          >
            -
          </span>
          <span>{infoProduct.quantity}</span>
          <span
            style={{ cursor: "pointer" }}
            id={product._id}
            onClick={handleIncrease}
          >
            +
          </span>
        </div>
      </div>
      <div
        onClick={(e) => {
          handleDelete(e);
        }}
        className="cart__item-delete"
      >
        <svg
          id={product._id}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trash"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="#2c3e50"
          fill="none"
          strokeLineCap="round"
          strokeLineJoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </div>
    </div>
  );
}

export default Cart;

export { CartItem };

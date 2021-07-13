import React from "react";

import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import { CartItem } from "../components/home/Cart";
import "../style/checkout.css";
import { useRecoilState } from "recoil";
import orderState from "../state/order.state";

function Checkout(props) {
  const [order, setOrder] = useRecoilState(orderState);
  return (
    <div id="checkout">
      <Header />
      <CheckoutBody order={order} />
      <Footer />
    </div>
  );
}

function CheckoutBody(props) {
  const { order } = props;
  return (
    <div className="checkout__container">
      <div className="checkout__order">
        <h2>Info order</h2>
        <div className="form-order">
          <div className="form__order-user">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="form__order-select-address">
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className="form_order-address">
            <input type="text" placeholder="House number, road number" />
          </div>

          <h2>Method payment</h2>
          <div className="form-pay">
            <form>
              <input type="radio" name="pay-normal" />
              <label htmlFor="pau-normal">Pay normal</label>
              <br />
              <input type="radio" name="pay-atm" />
              <label htmlFor="pau-normal">Pay with atm</label>
            </form>
          </div>
        </div>
      </div>
      <div className="checkout__products">
        <div className="checkout__products-container">
          <div className="product__order">
            {order.map((product) => {
              return (
                <CartItem infoProduct={product} key={product.product._id} />
              );
            })}
          </div>
          <div className="code__sale">
            <input type="text" />
            <button className="btn-apply">Apply</button>
          </div>
          <div className="shipping-fee">
            <p>Shipping fee</p>
            <p>100</p>
          </div>
          <div className="price-sum">
            <p>Sum price</p>
            <p>
              {order.reduce((sum, currentValue) => {
                return sum + currentValue.product.price;
              }, 0)}
            </p>
          </div>
          <p className="note"></p>
          <button className="btn-order">order completion</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

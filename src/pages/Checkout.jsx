import React from "react";

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

// import component
import CheckoutBody from "../components/checkout/CheckoutBody";

import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

import "../style/checkout.css";
import orderState from "../state/order.state";

// api
import getLocation from "../api/location.api";
// Message Component

function Checkout(props) {
  const [order, setOrder] = useRecoilState(orderState);
  const [locationData, setLocationData] = useState([]);

  const warningMessages = {
    name: {
      falseWarning: "Vui lòng nhập đúng tên",
      blankWarning: "Trường tên không được bỏ trống",
    },
    email: {
      falseWarning: "Vui lòng nhập đúng tên",
      blankWarning: "Trường email không được bỏ trống",
    },
    phoneNumber: {
      falseWarning: "Vui lòng nhập đúng số điện thoại",
      blankWarning: "Trường phone number không được bỏ trống",
    },
    province: "Ban chưa chọn tỉnh / thành phố",
    district: "Ban chưa chọn huyện",
    ward: "Bạn chưa chọn xã / phường",
    detailAddress: {
      falseWarning: "Vui lòng nhập đúng địa chỉ chi tiết",
      blankWarning: "Trường địa chỉ chi tiết không được bỏ trống",
    },
  };

  useEffect(() => {
    (async () => {
      try {
        const locationApi = await getLocation();
        const locationData = locationApi.data.data;
        setLocationData(locationData);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

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
            quantity: item.quantity - 1 >= 1 ? item.quantity - 1 : 1,
          })
        : item;
    });
    setOrder(updateOrder);
  }

  return (
    <div id="checkout">
      <Header></Header>
      <CheckoutBody
        order={order}
        locationData={locationData}
        warningMessage={warningMessages}
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
      />
      <Footer />
    </div>
  );
}

export default Checkout;

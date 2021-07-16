import React from "react";
import { useState } from "react";

import postOrder from "../../api/order.api";
import { CartItem } from "../../components/home/Cart";

import styled, { keyframes } from "styled-components";

const ForNotification = keyframes`
  0%{
    opacity:0;

  }
  10%{

    opacity:1;
  }
  90%{
    opacity:1;
  }
  100%{
    opacity:0;
  }

`;

const Notification = styled.div`
  width: 400px;
  height: 60px;
  position: absolute;

  /* opacity: 0; */
  right: 0;
  top: 5rem;
  background-color: red;
  opacity: 0.8;

  /* display: block; */
  color: #fff;
  font-weight: 400;
  border-radius: 0.4rem;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 6s ${ForNotification} ease-in;
`;

function NotificationContainer(props) {
  const { messageWaring, isActive } = props.message;
  console.log(messageWaring, isActive);

  return (
    <Notification style={{ display: isActive ? "flex" : "none" }}>
      <p>{messageWaring}</p>
    </Notification>
  );
}

function CheckoutBody(props) {
  const {
    order,
    handleDecrease,
    handleIncrease,
    locationData,
    warningMessage,
  } = props;

  const [address, setAddress] = useState({
    province: {
      name: "",
      data: locationData,
    },
    district: {
      name: "",
      data: [],
    },
    ward: {
      name: "",
      data: [],
    },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [message, setMessage] = useState({
    messageWaring: "",
    isActive: false,
  });

  console.log(address);
  function handleOrder() {
    if (name == "") {
      setMessage({
        messageWaring: warningMessage.name.blankWarning,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);

      return;
    }
    if (email == "") {
      setMessage({
        messageWaring: warningMessage.email.blankWarning,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }
    if (phoneNumber == "") {
      // setMessage(warningMessage.phoneNumber.blankWarning);
      setMessage({
        messageWaring: warningMessage.phoneNumber.blankWarning,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }
    if (address.province.name == "") {
      // setMessage(warningMessage.province);
      setMessage({
        messageWaring: warningMessage.province,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }
    if (address.district.name == "") {
      // setMessage(warningMessage.district);
      setMessage({
        messageWaring: warningMessage.district,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }
    if (address.ward.name == "") {
      // setMessage(warningMessage.ward);
      setMessage({
        messageWaring: warningMessage.ward,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }

    if (detailAddress == "") {
      setMessage({
        messageWaring: warningMessage.detailAddress.blankWarning,
        isActive: true,
      });

      setTimeout(() => {
        setMessage({
          messageWaring: "",
          isActive: false,
        });
      }, 6000);
      return;
    }

    const orderInfo = {
      info: {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        localAddress: {
          province: address.province.name,
          district: address.district.name,
          ward: address.ward.name,
        },
        detailAddress: detailAddress,
        order: order,
      },
    };

    const completeOrder = (async () => {
      try {
        const result = await postOrder(orderInfo);
        return result;
      } catch (error) {
        throw error;
      }
    })();

    console.log(completeOrder);
  }

  function handleName(e) {
    const value = e.target.value;
    console.log(value);
    setName(value);
  }

  function handleEmail(e) {
    const value = e.target.value;
    console.log(value);
    setEmail(value);
  }

  function handlePhoneNumber(e) {
    const value = e.target.value;
    console.log(value);

    setPhoneNumber(value);
  }

  function handleDetailAddress(e) {
    const value = e.target.value;
    console.log(value);

    setDetailAddress(value);
  }

  function handleSelectProvince(e) {
    const value = e.target.value;

    const districtData = locationData.find((element) => {
      return element.name === value;
    });

    const updateAddress = Object.assign(
      {},
      address,
      {
        province: {
          name: e.target.value,
        },
      },
      {
        district: {
          name: "",
          data: districtData.level2s,
        },
      }
    );
    setAddress(updateAddress);
  }

  function handleSelectDistrict(e) {
    const value = e.target.value;
    const districtData = address.district.data;

    const wardData = districtData.find((element) => {
      return element.name === value;
    });

    const updateAddress = Object.assign(
      {},
      address,
      {
        district: {
          name: e.target.value,
          data: districtData,
        },
      },
      {
        ward: {
          data: wardData.level3s,
        },
      }
    );
    setAddress(updateAddress);
  }

  function handleSelectWard(e) {
    const value = e.target.value;
    const wardData = address.ward.data;

    const updateAddress = Object.assign({}, address, {
      ward: {
        name: value,
        data: wardData,
      },
    });

    setAddress(updateAddress);
  }

  return (
    <div className="checkout__container">
      <div className="checkout__order">
        <h2>Info order</h2>
        <div className="form-order">
          <div className="form__order-user">
            <input type="text" placeholder="Name" onChange={handleName} />
            <input type="text" placeholder="Email" onChange={handleEmail} />
            <input
              type="text"
              placeholder="Phone number"
              onChange={handlePhoneNumber}
            />
          </div>
          <div className="form__order-select-address">
            <select name="province-address" onChange={handleSelectProvince}>
              <option value="default">Chọn Tỉnh / Thành phố</option>
              {locationData.map((element, index) => {
                return (
                  <option value={element.name} index={index}>
                    {element.name}
                  </option>
                );
              })}
            </select>
            <select name="district-address" onChange={handleSelectDistrict}>
              <option value="default">Chọn Quận / Huyện </option>

              {address.district.data.length > 0 &&
                address.district.data.map((element, index) => {
                  return (
                    <option value={element.name} index={index}>
                      {element.name}
                    </option>
                  );
                })}
            </select>
            <select name="ward-address" onChange={handleSelectWard}>
              <option value="default">Chọn xã / phường </option>
              {address.ward.data.length > 0 &&
                address.ward.data.map((element, index) => {
                  return (
                    <option value={element.name} index={index}>
                      {element.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="form_order-address">
            <input
              type="text"
              placeholder="House number, road number"
              onChange={handleDetailAddress}
            />
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
        <NotificationContainer message={message} />

        <div className="checkout__products-container">
          <div className="product__order">
            {order.map((product) => {
              return (
                <CartItem
                  infoProduct={product}
                  key={product.product._id}
                  handleDecrease={handleDecrease}
                  handleIncrease={handleIncrease}
                />
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
          <button className="btn-order" onClick={handleOrder}>
            order completion
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBody;

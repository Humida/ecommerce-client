import React from "react";
import orderState from "../../state/order.state";
import { useRecoilState } from "recoil";
import { useState } from "react";

function DetailProduct(props) {
  const product = props.product;

  const [image, setImage] = useState(product.images[0]);
  const [order, setOrder] = useRecoilState(orderState);

  function handleAddProduct() {
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
          // const itemOrder = Object.assign({}, item, {
          //   quantity: item.quantity + 1,
          // });
          isExist = true;
          // return itemOrder;
        }
        return item;
      });
      if (!isExist) {
        listOrder = [...listOrder, orderItem];
      }
      setOrder(listOrder);
    }
  }

  function handleClick(e) {
    const url = e.target.src;
    setImage(url);
  }

  return (
    <div id="detail__product">
      <div className="detail__product-container">
        <div className="detail__product-image">
          <img src={image} alt="" />
        </div>
        <div className="detail__product-desc">
          <p className="detail__product-desc-name">{product.nameProduct}</p>
          <p className="detail__product-desc-price">{product.price} $</p>
          <h2 className="detail__element">Color</h2>
          <div className="detail__product-desc-color">
            <div>
              <span>white</span>
              <div style={{ backgroundColor: "red" }}></div>
            </div>
            <div>
              <span>white</span>
              <div style={{ backgroundColor: "red" }}></div>
            </div>
            <div>
              <span>white</span>
              <div style={{ backgroundColor: "red" }}></div>
            </div>
            <div>
              <span>white</span>
              <div style={{ backgroundColor: "red" }}></div>
            </div>
          </div>
          <h2 className="detail__element">Size</h2>
          <div className="detail__product-desc-size">
            <span>4(size29)</span>
            <span>4(size29)</span>
            <span>4(size29)</span>
            <span>4(size29)</span>
          </div>
          <div className="image__product">
            {product.images != undefined &&
              product.images.map((url) => {
                return <img src={url} alt="" onClick={handleClick} />;
              })}
            {/* <img
              src="https://images.unsplash.com/photo-1622495892858-706d6a27b49e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1622495892858-706d6a27b49e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1622495892858-706d6a27b49e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt=""
            /> */}
          </div>
          <button onClick={handleAddProduct}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;

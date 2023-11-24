import React, { useState } from "react";
import "./addtocart.css";
import palm from "../images/0521_jpg.jpg";

export default function AddToCart() {
  const [count, setCount] = useState(1);
  const [quantity, setQuantity] = useState(245);

  const Decriment = () => {
    setCount(count - 1);
    if (count == 1) {
      setCount(1);
    }
  };
  const Incriment = () => {
    setCount(count + 1);
    setQuantity(count * quantity);
  };

  return (
    <div className="container-fluid cart-bg">
      <div className="container cart-container">
        <div className="cart-headings">
          <h2>Shopping Cart</h2>
          <div className="d-flex align-items-center justify-content-between flex-wrap border-line">
            <p>Product Description</p>
            <div className="d-flex align-items-center justify-content-between price-quantity">
              <p>Quantity</p>
              <p className="price-tag">Price</p>
            </div>
          </div>
          <div className="padding-bottom">
            <div className="d-flex align-items-center justify-content-between py-4 bg-color-product">
              <div className="d-flex align-items-center justify-content-between flex-wrap product-detail">
                <div className="product-img">
                  <img src={palm} alt="" />
                </div>
                <div>
                  <p className="m-0 p-0 new-word">NEW</p>
                  <h3>Aduro Palm</h3>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between dollar-price">
                {/* <div className=" incri-decri">
                  <span onClick={Decriment}>
                    <i class="fa-solid fa-minus"></i>
                  </span>
                  <p>{count}</p>
                  <span onClick={Incriment} className=" text-danger">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </div> */}
                <p>245$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="last-sec">
          <div className="d-flex align-items-center justify-content-end">
            <p className="px-5 pt-2">Subtotal:</p>
            <p className="px-5 pt-2">{quantity}$</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="universal-btn ">
                <a href="">Continue Shopping</a>
              </span>
            </div>
            <div className="d-flex align-items-center">
              <input type="checkbox" />
              <span>Agree to the Terms And Conditions</span>
            </div>
            <div>
              <span className="universal-btn ">
                <a href="">Buy Now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="wraper-cart">
        <h2>Shopping Cart</h2>
        <div className="parent-cart">
          <div className="product-view">
            <div className="view-img">
              <img src={palm} alt="" />
            </div>
            <div className="desc-name">
              <p className="text-start">Product Description</p>
              <p>New</p>
              <h4>Aduro Palm</h4>
              <div className="price-q">
                <div></div>
                <p className="text-start">Price</p>
                <p className="text-start">Quantity</p>
              </div>
              <div className="price-plus-minus">
                <p>245$</p>
                <div className=" incri-decri">
                  <span onClick={Decriment}>
                    <i class="fa-solid fa-minus"></i>
                  </span>
                  <div>
                    <p>{count}</p>
                  </div>
                  <span onClick={Incriment} className=" text-danger">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="subtotal-bill">
            <div className="d-flex align-items-center">
              <p>Sub total:</p>
              <p>{quantity}$</p>
            </div>

            <div className="d-flex my-4">
              <input type="checkbox" />
              <h6>
                Agree to the Terms And Conditions Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Pariatur, tenetur!
              </h6>
            </div>
            <div className="buttons">
              <span className="universal-btn ">
                <a href="">Continue Shopping</a>
              </span>
              <span className="universal-btn ">
                <a href="">Buy Now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

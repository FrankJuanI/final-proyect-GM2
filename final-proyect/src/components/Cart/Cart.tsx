import "./Cart.css";
import { useEffect, useState } from "react";
import { CartRow } from "./CartRow.tsx/CartRow";
import { Nav } from "../Nav/Nav";
import { useCartContext } from "../../context/CartContext";
import { useLoginStatus } from "../../context/LoginStatusContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  const { localCart } = useCartContext();
  const { isAuth } = useLoginStatus();
  const { totalPrice } = useCartContext();

  useEffect(() => {
    if (isAuth === false) {
      navigate("/not-loggedin");
    }
  }, [isAuth]);

  // Calcular el precio total
  const total = localCart.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      <Nav />
      <div className="cart-container">
        <div className="cart-header">
          <img src="shopping-cart.png" alt="" />
          <h1>Cart</h1>
        </div>

        <div className="cart-resume-container">
          <div className="cart-rows-container">
            {localCart.map((product) => (
              <CartRow
                key={"rowcart" + product.title + product.id}
                product={product}
              />
            ))}
          </div>
          <div className="cart-total-container">
            <div className="total-resume-header">
              <h2>Summary</h2>
            </div>
            <div className="total-resume-items-count">
              <div>
                <p>ITEMS:</p>
              </div>
              <div>
                <p>{localCart.length}</p>
              </div>
            </div>
            <div className="total-resume-shipping">
              <p>SHIPPING</p>
              <select name="Select Shipping" id="select-shipping">
                <option value="">Pick up in store</option>
                <option value="">Standard-Delivery- $5.00</option>
                <option value="">Premium-Delivery- $15</option>
              </select>
            </div>
            <div className="total-resume-code-container">
              <p>GIVE CODE</p>
              <input type="text" />
            </div>
            <div className="total-resume-toal-price">
              <div>TOTAL PRICE:</div>
              <div style={{ color: "green" }}>{totalPrice}</div>
            </div>
            <div className="total-resume-checkout">
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

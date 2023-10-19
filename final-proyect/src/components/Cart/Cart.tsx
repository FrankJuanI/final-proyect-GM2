import "./Cart.css";
import { useEffect, useState } from "react";
import { CartRow } from "./CartRow.tsx/CartRow";
import { Nav } from "../Nav/Nav";
import { useCartContext } from "../../context/CartContext";
import { useLoginStatus } from "../../context/LoginStatusContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  const { cart, localCart, getCartData } = useCartContext();
  const { isAuth, auth } = useLoginStatus();

  console.log("cart: ", cart)
  console.log("localCart: ", localCart)

  useEffect(() => {
    if (!isAuth) {
      navigate("/not-loggedin");
    }
  }, []);

  useEffect(() => {
    const getData = async () => {
      await getCartData(auth.id);
    };

    if (auth != undefined) {
      getData();
    }
  }, [auth]);


  const quantity = 3;
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
            {cart && auth
          ? cart.map((product) => <CartRow product={product} />)
          : null}
            {
              localCart.map((product) => <CartRow product={product} />)
            }
          </div>
          <div className="cart-total-container">
            <div className="total-resume-header">
              <h2>Summary</h2>
            </div>
            <div className="total-resume-items-count">
              <div><p>ITEMS:</p></div>
              <div><p>3</p></div>
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
              <div style={{color:"green"}}>$$$$</div>
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

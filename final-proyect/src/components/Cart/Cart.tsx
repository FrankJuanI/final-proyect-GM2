import "./Cart.css";
import { useEffect, useState } from "react";
import { CartRow } from "./CartRow.tsx/CartRow";
import { Nav } from "../Nav/Nav";
import { useCartContext } from "../../context/CartContext";
import { useLoginStatus } from "../../context/LoginStatusContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  const { cart, getCartData } = useCartContext();
  
  const { isAuth, auth } = useLoginStatus();

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
          </div>
          <div className="cart-total-container">
            <div className="total-resume-header">
              <h2>Summary</h2>
            </div>
            <div>
              <div><p>ITEMS: 3</p></div>
              <div><p>$$$$</p></div>
            </div>
            <div>
              <p>SHIPPING</p>
              <div style={{width:"80%", height:"40px", backgroundColor:"black"}}></div>
            </div>
            <div>
              <p>GIVE CODE</p>
              <div style={{width:"80%", height:"40px", backgroundColor:"black"}}></div>
            </div>
            <div>
              <div>TOTAL PRICE:</div>
              <div>$$$$</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

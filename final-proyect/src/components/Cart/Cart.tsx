import "./Cart.css";
import { useEffect, useState } from "react";
import { CartRow } from "./CartRow.tsx/CartRow";
import { Nav } from "../Nav/Nav";
import { useCartContext } from "../../context/CartContext";
import { useLoginStatus } from "../../context/LoginStatusContext";
import { useNavigate } from "react-router-dom";
import debounce from "just-debounce-it";

export function Cart() {
  const navigate = useNavigate();
  const { localCart, totalPrice, totalItems, applyPromoCode } =
    useCartContext();
  const { isAuth } = useLoginStatus();
  const { promoCodeState, setPromoCodeState } = useState();

  const debouncePromoCodes = debounce((code: string) => {
    applyPromoCode(code);
  }, 600);

  useEffect(() => {
    if (isAuth === false) {
      navigate("/not-loggedin");
    }
  }, [isAuth]);

  const handleOnChangeCodeInput = (code: string) => {
    debouncePromoCodes(code);
  };

  const hendleClickCheckout = (code: string) => {};

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
                <p>{totalItems}</p>
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
              <input
                onChange={(event) =>
                  handleOnChangeCodeInput(event.target.value)
                }
                type="text"
              />
            </div>
            <div className="total-resume-toal-price">
              <div>TOTAL PRICE:</div>
              <div style={{ color: "green" }}>{totalPrice}</div>
            </div>
            <div className="total-resume-checkout">
              <button onClick={() => hendleClickCheckout()}>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

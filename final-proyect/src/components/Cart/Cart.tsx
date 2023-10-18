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

  useEffect(() => {}, []);

  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };
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
          <div className="cart-resume-header">
            <h3 id="product">PRODUCT</h3>
            <h3 id="price">PRICE</h3>
            <h3 id="quantity">QUANTITY</h3>
            <h3 id="total">TOTAL</h3>
          </div>
          <div className="cart-rows-container">
            <div className="product-row">
              <div id="img-delete-row">
                <button>
                  <img src="close.png" alt="" />
                </button>
              </div>
              <div className="product-description">
                <img src={product.images[0]} alt="" />
                <h4>{product.title}</h4>
              </div>
              <h4>{product.price}</h4>
              <div className="buttons-quantity">
                <button>-</button>
                <p>3</p>
                <button>+</button>
              </div>
              <h4>{product.price * quantity}</h4>
            </div>
          </div>
        </div>

        {cart && auth
          ? cart.map((product) => <CartRow product={product} />)
          : null}
      </div>
    </>
  );
}

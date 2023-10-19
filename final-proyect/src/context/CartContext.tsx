import { createContext, useContext, useCallback, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

import { useGetProductDetail } from "../hooks/useGetProductDetail.ts";

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [localCart, setLocalCart] = useState([])

  const getCartData = useCallback((id) => {
    fetch(`https://dummyjson.com/carts/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.carts[0].product)
        setCart(data.carts[0].products);
      });
  }, []);

  const getCartProductImg = useCallback((id) => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return `${data.images[0]}`;
      });
  }, []);

  const addLocalCartProduct = (id)=>{
    const newCart = [...localCart]
    console.log("desestructured oldCart: ", newCart)
    console.log(id)
    console.log("fetch desde addlocal: ")
    fetch(`https://dummyjson.com/product/${id}`)
    .then((res) => res.json())
    .then((data) => {
        newCart.push(data)
      });
    setLocalCart(newCart)
    console.log("cart: ", newCart)
  }

  return (
    <CartContext.Provider value={{ cart, localCart, setCart, getCartData, getCartProductImg, addLocalCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

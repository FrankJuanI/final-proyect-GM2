import { createContext, useContext, useCallback, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState();

  const getCartData = useCallback((id) => {
    fetch(`https://dummyjson.com/carts/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
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

  return (
    <CartContext.Provider value={{ cart, setCart, getCartData, getCartProductImg }}>
      {children}
    </CartContext.Provider>
  );
};

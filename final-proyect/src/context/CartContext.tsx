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

  return (
    <CartContext.Provider value={{ cart, setCart, getCartData }}>
      {children}
    </CartContext.Provider>
  );
};

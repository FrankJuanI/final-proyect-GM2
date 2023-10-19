import { createContext, useContext, useCallback, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartContextProvider = ({ children }) => {
  const [localCart, setLocalCart] = useState([])
  const [load, setLoad] = useState(false)

  const getCartData = useCallback((id) => {
      const newCart = [...localCart]
      fetch(`https://dummyjson.com/carts/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        newCart.push(...data.carts[0].products)
        setLocalCart(newCart);
        console.log("fetch a carrito api")
        setLoad(!load)
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
    fetch(`https://dummyjson.com/product/${id}`)
    .then((res) => res.json())
    .then((data) => {
        newCart.push(data)
        setLocalCart(newCart)
        console.log(newCart)
      });
  }

  return (
    <CartContext.Provider value={{ localCart, setLocalCart, getCartData, getCartProductImg, addLocalCartProduct, load, setLoad}}>
      {children}
    </CartContext.Provider>
  );
};

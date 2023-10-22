import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
import { LoginStatusContext } from "./LoginStatusContext";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [localCart, setLocalCart] = useState([]);
  const [load, setLoad] = useState(false);

  const removeFromCart = (id) => {
    const updatedCart = localCart.filter((product) => product.id !== id);
    setLocalCart(updatedCart);
  };

  const getCartData = useCallback(
    (id) => {
      fetch(`https://dummyjson.com/carts/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("FRANK", { data, localCart });
          setLocalCart([...localCart, ...data.carts[0].products]);
          console.log("fetch a carrito api");
          setLoad(!load);
        });
    },
    [localCart]
  );

  const getCartProductImg = useCallback((id) => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return `${data.images[0]}`;
      });
  }, []);

  const addLocalCartProduct = (id) => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLocalCart([...localCart, data]);
      });
  };

  return (
    <CartContext.Provider
      value={{
        localCart,
        setLocalCart,
        getCartData,
        getCartProductImg,
        addLocalCartProduct,
        removeFromCart,
        load,
        setLoad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

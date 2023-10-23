import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [localCart, setLocalCart] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setLocalCart(JSON.parse(cart));
    }
  }, []);

  const addToCart = useCallback(
    (productDetail) => {
      const updatedLocalCart = [...localCart, productDetail];
      localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
      setLocalCart(updatedLocalCart);
    },
    [localCart]
  );

  const deleteFromCart = (productDetail) => {
    const updatedLocalCart = localCart.filter(
      (item) => item.id !== productDetail.id
    );
    localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
    setLocalCart(updatedLocalCart);
  };

  const getCartProductImg = useCallback((id) => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return `${data.images[0]}`;
      });
  }, []);

  return (
    <CartContext.Provider
      value={{
        localCart,
        getCartProductImg,
        load,
        setLoad,
        addToCart,
        deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

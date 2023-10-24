import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
  ReactNode,
} from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface CartProduct {
  id: number;
  title: string;
  image?: string;
  quantity: number;
  price: number;
}

interface CartContextProviderProps {
  children: ReactNode;
  list: [];
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [localCart, setLocalCart] = useState<CartProduct[]>([]);
  const [load, setLoad] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setLocalCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    let quantity = 0;
    for (const item of localCart) {
      quantity = quantity + item.quantity;
    }
    setTotalItems(quantity);
  }, [localCart]);

  useEffect(() => {
    let price = 0;
    for (const item of localCart) {
      price = price + item.price * item.quantity;
    }
    setTotalPrice(price);
  }, [localCart]);


  const updateCart = (productDetail: Product) => {
    const updatedLocalCart = localCart.map((product) => 
    product.id === productDetail.id ? 
    { ...product, quantity: product.quantity + 1 } 
    : product);
    return updatedLocalCart
  }
  
  const addProductToCart = (productDetail: Product) =>{
    const { id, title, price, images: [image],} = productDetail;
    const updatedLocalCart = [...localCart, { id, title, price, image, quantity: 1 }, ]
    return updatedLocalCart
  }

  const addToCart = useCallback(
    (productDetail: Product) => {
      const productInCart = localCart.find(
        (product) => product.id === productDetail.id
      );
      const updatedLocalCart = productInCart ? 
      updateCart(productDetail) 
      : addProductToCart(productDetail);

      localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
      setLocalCart(updatedLocalCart);
    },
    [localCart]
  );

  const substractionProductQuantity = (id: number) => {
    const updatedLocalCart = localCart.map((product) => {
      if (product.id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
    setLocalCart(updatedLocalCart);
  };

  const deleteFromCart = (productDetail: Product) => {
    const updatedLocalCart = localCart.filter(
      (item) => item.id !== productDetail.id
    );
    localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
    setLocalCart(updatedLocalCart);
  };

  const getCartProductImg = useCallback((id: number) => {
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
        substractionProductQuantity,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

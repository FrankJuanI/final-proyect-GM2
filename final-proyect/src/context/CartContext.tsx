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
  const promoCodes = [
    {
      code: "ZUeNYmEt",
      discount: 10,
    },
    {
      code: "cOMaNGeT",
      discount: 15,
    },
    {
      code: "iPHeoLOu",
      discount: 35,
    },
    {
      code: "WINgaTER",
      discount: 25,
    },
    {
      code: "YETInVeN",
      discount: 16,
    },
    {
      code: "omPicula",
      discount: 7,
    },
  ];

  const [localCart, setLocalCart] = useState<CartProduct[]>([]);
  const [load, setLoad] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

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
    setPrice(price);
  }, [localCart]);

  useEffect(() => {
    if (discount) {
      let price = 0;
      for (const item of localCart) {
        price = price + item.price * item.quantity;
      }
      setTotalPrice(price - (price * discount) / 100);
    }
  }, [localCart]);

  const updateCart = (productDetail: Product, quantity: number) => {
    const updatedLocalCart = localCart.map((product) =>
      product.id === productDetail.id
        ? { ...product, quantity: product.quantity + quantity }
        : product
    );
    return updatedLocalCart;
  };

  const addProductToCart = (productDetail: Product, quantity: number) => {
    const {
      id,
      title,
      price,
      images: [image],
    } = productDetail;
    const updatedLocalCart = [
      ...localCart,
      { id, title, price, image, quantity: quantity },
    ];
    return updatedLocalCart;
  };

  const ProductInCart = (productDetail: Product) => {
    const isProductInCart = localCart.find(
      (product) => product.id === productDetail.id
    );
    return isProductInCart;
  };

  const addToCart = useCallback(
    (productDetail: Product, quantity: number) => {
      const productInCart = ProductInCart(productDetail);
      const updatedLocalCart = productInCart
        ? updateCart(productDetail, quantity)
        : addProductToCart(productDetail, quantity);

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

  const applyPromoCode = (codee: string) => {
    if (codee === "") {
      setDiscount(0);
      setDefaultPrice();
      return null;
    }
    const discount = promoCodes.filter(
      (codeObject) => codeObject.code === codee
    );
    {
      discount[0] != undefined
        ? applyDiscount(discount[0].discount)
        : setDefaultPrice();
    }
    return discount;
  };

  const applyDiscount = (discount: number) => {
    const newPrice = totalPrice - (totalPrice * discount) / 100;
    setDiscount(discount);
    setTotalPrice(newPrice.toFixed(2));
  };

  const setDefaultPrice = () => {
    setTotalPrice(price);
  };

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
        ProductInCart,
        applyPromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

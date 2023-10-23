import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import "../Cart.css";

export function CartRow({ product }) {
  const [img, setImg] = useState();

  const { deleteFromCart, localCart } = useCartContext();

  const handleRemoveClick = () => {
    deleteFromCart(product);
  };

  const [productQuantity, setProductQuantity] = useState(0);

  const substractionProductQuantity = () => {
    if (productQuantity === 0) {
      setProductQuantity(0);
    } else {
      setProductQuantity(productQuantity - 1);
    }
  };
  const addProductQuantity = () => setProductQuantity(productQuantity + 1);

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        setImg(data.images[0]);
      });
  }, [localCart]);

  return (
    <div className="product-row">
      <div className="product-description">
        <img src={img} alt="" />
        <h4>{product.title}</h4>
      </div>
      <div className="product-buy-details">
        <h4>$ {product.price}</h4>
        <div className="buttons-quantity">
          <button onClick={substractionProductQuantity}>-</button>
          <p>{productQuantity}</p>
          <button onClick={addProductQuantity}>+</button>
        </div>
        <h4>$ {product.price * productQuantity}</h4>
        <div id="img-delete-row">
          <button onClick={handleRemoveClick}>
            <img src="close2.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

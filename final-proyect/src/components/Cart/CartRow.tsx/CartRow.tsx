import { useCallback, useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import "../Cart.css"
export function CartRow({product}) {

  const {getCartProductImg} = useCartContext();

  const [img, setImg] = useState()

  useEffect(()=>{
      fetch(`https://dummyjson.com/product/${product.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.images[0])
        setImg(data.images[0])
      });
  },[])


  const quantity = 3
  return (
    <div className="product-row">
      <div className="product-description">
        <img src={ img  } alt="" />
        <h4>{product.title}</h4>
      </div>
      <h4>$ {product.price}</h4>
      <div className="buttons-quantity">
        <button>-</button>
        <p>3</p>
        <button>+</button>
      </div>
      <h4>$ {product.price * quantity}</h4>
       <div id="img-delete-row">
        <button>
          <img src="close2.png" alt="" />
        </button>
      </div> 
    </div>
  );
}

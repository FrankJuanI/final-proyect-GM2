import { redirect } from "react-router-dom";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
interface CardProps {
  id: number;
  images: [];
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
}

function Card({
  id,
  images,
  title,
  price,
  description,
  discountPercentage,
}: CardProps) {
  
  const navigate = useNavigate()
  const {addLocalCartProduct} = useCartContext()

  const handleClick = () =>{
    console.log("pep")
    addLocalCartProduct(id)
  }


  return (
    <div className="card" >
      <div className="product" onClick={()=> navigate(`/product-detail/${id}`)}>
        <img src={images[0]} alt="" />
        <div className="text-container">
          <h3>{`$${price}`}</h3>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="add-to-cart-button" onClick={handleClick} >Add to cart</button>
        <button className="buy-now-button">Buy now</button>
        <p>Read Reviews</p>
      </div>
    </div>
  );
}

export { Card };

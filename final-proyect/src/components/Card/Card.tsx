import { redirect } from "react-router-dom";
import "./Card.css";
import { useNavigate } from "react-router-dom";
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
  return (
    <div className="card" onClick={()=> navigate(`/product-detail/${id}`)}>
      <img src={images[0]} alt="" />
      <div className="text-container">
        <h3>{`$${price}`}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <button className="add-to-cart-button">Add to cart</button>
        <button className="buy-now-button">Buy now</button>
      </div>
      <p>Read Reviews</p>
    </div>
  );
}

export { Card };

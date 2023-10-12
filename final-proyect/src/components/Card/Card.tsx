import "./Card.css";

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
  return (
    <div className="card">
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

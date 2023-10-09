import "./Card.css";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
}

function Card({ id, image, title, price, description }: CardProps) {
  return (
    <div className="card">
      <img src={image} alt="" />
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

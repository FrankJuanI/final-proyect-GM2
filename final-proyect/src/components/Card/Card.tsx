import { Link } from "react-router-dom";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { toast } from "sonner";

interface CardProps {
  id: number;
  images: string[];
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
}

function Card({ productDetail }: CardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCartContext();

  const handleClick = () => {
    addToCart(productDetail, 1);
  };

  return (
    <div className="card">
      <div
        className="product"
        onClick={() => navigate(`/product-detail/${productDetail.id}`)}
      >
        <img src={productDetail.images[0]} alt="" />
        <div className="text-container">
          <h3>{`$${productDetail.price}`}</h3>
          <h2>{productDetail.title}</h2>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <div className="buttons">
        <button
          className="add-to-cart-button"
          onClick={() => {
            toast.success("Added to cart");
            handleClick();
          }}
        >
          Add to cart
        </button>
        <Link className="buy-now-button" to={`/checkout/${productDetail.id}`}>
          Buy Now
        </Link>
      </div>
    </div>
  );
}

export { Card };

import { Link, useNavigate } from "react-router-dom";
import { useWishListContext } from "../../../../context/WishListContext";
import { toast } from "sonner";

export function WishProduct({ product }) {
  const navigate = useNavigate();
  const { deleteFromWishlist } = useWishListContext();

  const handleDeleteButtonClick = (event) => {
    event.preventDefault();
    toast.error("Remove from wishlist");
    deleteFromWishlist(product);
  };
  return (
    <li>
      <Link to={`/product-detail/${product.id}`} className="wish-product">
        <img
          className="wishlist-menu-item-image"
          src={product.images[0]}
          alt="product-img"
        />
        <p>{product.title}</p>
        <button
          className="delete-item-wishlist"
          onClick={handleDeleteButtonClick}
        >
          <img src="/close2.png" alt="" />
        </button>
      </Link>
    </li>
  );
}

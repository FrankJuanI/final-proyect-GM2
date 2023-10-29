import { useNavigate } from "react-router-dom";
import { useWishListContext } from "../context/WishListContext";
import "./WishListInProfile.css";

export function WishProductInProfile({ product }) {
  const navigate = useNavigate();
  const { deleteFromWishlist } = useWishListContext();

  return (
    <li
      onClick={() => navigate(`/product-detail/${product.id}`)}
      className="wish-product-profile"
    >
      <img className="img-product-wishlist" src={product.images[0]} alt="" />
      <p className="wishlist-title-product">{product.title}</p>
      <button onClick={() => deleteFromWishlist(product)}>
        <img className="delete-of-wishlist-img" src="/close2.png" alt="" />
      </button>
    </li>
  );
}

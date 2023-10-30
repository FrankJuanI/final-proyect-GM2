import { useNavigate } from "react-router-dom";
import { useWishListContext } from "../../../../context/WishListContext";

export function WishProduct({ product }) {
  const navigate = useNavigate();
  const { deleteFromWishlist } = useWishListContext();
console.log(product)
  return (
    <li
      onClick={() => navigate(`/product-detail/${product.id}`)}
      className="wish-product"
    >
      <img className="wishlist-menu-item-image" src={product.images[0]} alt="ola" />
      <p>{product.title}</p>
      <button className="delete-item-wishlist" onClick={() => deleteFromWishlist(product)}>
        <img  src="/close2.png" alt="" />
      </button>
    </li>
  );
}

import { useNavigate } from "react-router-dom";
import { useWishListContext } from "../../../../context/WishListContext";

export function WishProduct({ product }) {
  const navigate = useNavigate();
  const { deleteFromWishlist } = useWishListContext();

  return (
    <li
      onClick={() => navigate(`/product-detail/${product.id}`)}
      className="wish-product"
    >
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <button onClick={() => deleteFromWishlist(product)}>
        <img src="/close2.png" alt="" />
      </button>
    </li>
  );
}

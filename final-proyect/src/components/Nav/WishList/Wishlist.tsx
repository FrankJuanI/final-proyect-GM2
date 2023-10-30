import { useWishListContext } from "../../../context/WishListContext.tsx";
import { WishProduct } from "./WishProduct/WishProduct.tsx";
import "./Wishlist.css";

export function Wishlist() {
  const { wishlist } = useWishListContext([]);

  return (
    <ul id="wishlist-ul">
      <div className="wishlist-header">
        <h3>Wishlist</h3>
      </div>

        {wishlist.length != 0 ? (
            <div className="wishlist-menu-container">
          {wishlist.map((product) => (
            <WishProduct key={product.id} product={product} />
          ))}
            </div>
        ) : (
          <p>Not wished products</p>
        )}

    </ul>
  );
}

import { Nav } from "../Nav/Nav";
import { Carousel } from "../Carousel/Carousel";
import "./ProductDetail.css";
import { IncrementDecrement } from "../IncrementDecrement/IncrementDecrement";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import { useParams, Link } from "react-router-dom";
import { useGetProductDetail } from "../../hooks/useGetProductDetail";
import { useWishListContext } from "../../context/WishListContext.tsx";
import { toast } from "sonner";
import { useState } from "react";
import heartfill from "/redheart.png";
import { useCartContext } from "../../context/CartContext.tsx";

export function ProductsDetails() {
  const { addToWishlist, deleteFromWishlist, wishlist } = useWishListContext();
  const { addToCart } = useCartContext();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const productDetail = useGetProductDetail(id);

  const calculateDiscount = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  const WishlistActions = () => {
    handleClick();
    {
      wishlist.find((product) => product.id === productDetail.id)
        ? toast.error("Remove to wishlist")
        : toast.success("Add to wishlist");
    }
  };

  const handleClick = () => {
    if (wishlist.find((product) => product.id === productDetail.id)) {
      deleteFromWishlist(productDetail);
    } else {
      addToWishlist(productDetail);
    }
  };

  const handleSumQuantity = () => {
    if (quantity < productDetail.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleResQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Nav />
      <div className="content">
        {productDetail &&
        productDetail.images &&
        productDetail.images.length !== undefined ? (
          <Carousel pictures={productDetail.images} />
        ) : null}
        <div className="product-info">
          <div className="title-brand">
            <h1>{productDetail && productDetail.title}</h1>
            <p className="brand">{productDetail && productDetail.brand}</p>
          </div>
          <div className="price">
            <p className="old-price">${productDetail && productDetail.price}</p>
            <p className="new-price">
              $
              {productDetail &&
                calculateDiscount(
                  productDetail.price,
                  productDetail.discountPercentage
                ).toFixed(2)}
            </p>
          </div>
          <div className="stock">
            <p className="stock-title">
              {productDetail && productDetail.stock} item left
            </p>
            <div className="stock-bar">
              <div
                className="progress-stock"
                style={{
                  width: `${productDetail && productDetail.stock}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="description-buy">
            <div className="description">
              <h2 className="description-title">description</h2>
              <p className="description-text">
                {productDetail && productDetail.description}
              </p>
            </div>
            <div className="buy">
              <div className="select-quantity">
                <p className="quantity-title">Quantity</p>
                {productDetail ? (
                  <IncrementDecrement
                    productStock={productDetail.stock}
                    handleSumQuantity={handleSumQuantity}
                    handleResQuantity={handleResQuantity}
                  />
                ) : (
                  "load.."
                )}
                <p className="maximum-purchase">
                  Maximum Purchase: {productDetail && productDetail.stock}
                </p>
              </div>
              <div className="buttons-actions">
                <Link className="buy-now-button" to={`/checkout/${id}`}>
                  Buy Now
                </Link>
                <div className="add-to">
                  <div className="cart">
                    <button
                      className="action"
                      onClick={() => {
                        toast.success("Added to cart");
                        addToCart(productDetail, quantity);
                      }}
                    >
                      <img src={cart} alt="cart" />
                      Add to Cart
                    </button>
                  </div>
                  <div className="wish-list">
                    <button className="action" onClick={WishlistActions}>
                      <img
                        src={
                          productDetail &&
                          wishlist.find(
                            (product) => product.id === productDetail.id
                          )
                            ? heartfill
                            : heart
                        }
                        alt="heart"
                      />
                      Wish List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { Nav } from "../Nav/Nav";
import { Carousel } from "../Carousel/Carousel";
import "./ProductDetail.css";
import { IncrementDecrement } from "../IncrementDecrement/IncrementDecrement";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../../hooks/useGetProductDetail";

export function ProductsDetails() {

  const {id} = useParams()

  const productDetail = useGetProductDetail(id)

  console.log(productDetail)

  console.log(id)

  const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100)
  }

  const pictures = [
    "https://nikearprod.vtexassets.com/arquivos/ids/311222/DD8959_108_A_PREM.jpg?v=638122456034070000",
    "https://nikearprod.vtexassets.com/arquivos/ids/699311/DH2920_001_A_PREM.jpg?v=638229667061330000",
    "https://nikearprod.vtexassets.com/arquivos/ids/698461/DH4072_001_A_PREM.jpg?v=638229587866770000",
  ];
  return (
    
    <>
      <Nav />
      <div className="content">
        {
          productDetail && productDetail.images != undefined ? <Carousel pictures={productDetail.images} /> : null
        }
        <div className="product-info">
          <div className="title-brand">
            <h1>{productDetail && productDetail.title}</h1>
            <p className="brand">{productDetail && productDetail.brand}</p>
          </div>
          <div className="price">
            <p className="old-price">${productDetail && productDetail.price}</p>
            <p className="new-price">${productDetail && calculateDiscount(productDetail.price, productDetail.discountPercentage)}</p> {/* se tiene que calcular */}
          </div>
          <div className="stock">
            <p className="stock-title">{productDetail && productDetail.stock} item left</p>
            <div className="stock-bar">
              <div className="progress-stock"></div>
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
                <IncrementDecrement />
                <p className="maximum-purchase">Maximum Purchase: {productDetail && productDetail.stock}</p>
              </div>
              <div className="buttons-actions">
                <button className="buy-now">Buy Now</button>
                <div className="add-to">
                  <div className="cart">
                    <button className="action">
                      <img src={cart} alt="cart" />
                      Add to Cart
                    </button>
                  </div>
                  <div className="wish-list">
                    <button className="action">
                      <img src={heart} alt="heart" />
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

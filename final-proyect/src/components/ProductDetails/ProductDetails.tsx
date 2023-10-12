import { Nav } from "../Nav/Nav";
import { Carousel } from "../Carousel/Carousel";
import "./ProductDetail.css";
import { IncrementDecrement } from "../IncrementDecrement/IncrementDecrement";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";

export function ProductsDetails() {
  const pictures = [
    "https://nikearprod.vtexassets.com/arquivos/ids/311222/DD8959_108_A_PREM.jpg?v=638122456034070000",
    "https://nikearprod.vtexassets.com/arquivos/ids/699311/DH2920_001_A_PREM.jpg?v=638229667061330000",
    "https://nikearprod.vtexassets.com/arquivos/ids/698461/DH4072_001_A_PREM.jpg?v=638229587866770000",
  ];
  return (
    <>
      <Nav />
      <div className="content">
        <Carousel pictures={pictures} />
        <div className="product-info">
          <div className="title-brand">
            <h1>Nike Air 232</h1>
            <p className="brand">Apple</p>
          </div>
          <div className="price">
            <p className="old-price">$550</p>
            <p className="new-price">$320</p> {/* se tiene que calcular */}
          </div>
          <div className="stock">
            <p className="stock-title">34 item left</p>
            <div className="stock-bar">
              <div className="progress-stock"></div>
            </div>
          </div>
          <div className="description-buy">
            <div className="description">
              <p className="description-title">description</p>
              <h2 className="description-text">
                An apple mobile which is nothing like apple"
              </h2>
            </div>
            <div className="buy">
              <div className="select-quantity">
                <p className="quantity-title">Quantity</p>
                <IncrementDecrement />
                <p className="maximum-purchase">Maximum Purchase: 5</p>
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

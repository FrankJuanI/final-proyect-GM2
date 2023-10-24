import "./Checkout.css";
import cardIcon from "/card.svg";
import { Nav } from "../Nav/Nav";
import { useParams } from "react-router-dom";
import { useGetProductDetail } from "../../hooks/useGetProductDetail";
import { useFetchImg } from "../../hooks/useHomeData";
export const CheckoutPage = () => {
  const { productId } = useParams();

  const productDetail = useGetProductDetail(productId);
  const Imgs = useFetchImg();
  const BannerStyle = productDetail ? {
    backgroundImage: `url(${productDetail.images[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } : {};
  return (
    <>
      <Nav />
      <div className="banner-container" style={BannerStyle}>
        <div className="banner-content">
          {productDetail !== undefined ? (
            <img
              src={productDetail.images[0]}
              alt="product-img"
              className="banner-image"
            />
          ) : null}
          <div className="info-container">
            <div className="buy-product-info">
              <h1>{productDetail ? productDetail.title : "Loading..."}</h1>
              <p>{productDetail ? `$${productDetail.price}` : "Loading..."}</p>
            </div>

            <div className="card-info">
              <img className="card-icon" src={cardIcon} alt="" />
              <form className="form-card" action="send-info-card">
                <input placeholder="CARD NUMBER" type="text" />
                <br />
                <input placeholder="CARDHOLDER NAME" type="text" />
                <br />
                <div className="important-card-info">
                  <div>
                    <label htmlFor="">EXPIRY MOUNTH</label>
                    <input
                      className="specific-data"
                      placeholder="MM"
                      type="text"
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="">EXPIRY YEAR</label>
                    <input
                      className="specific-data"
                      placeholder="YY"
                      type="text"
                    />
                  </div>
                  <br />

                  <div>
                    <label htmlFor="">CVC</label>
                    <input
                      className="specific-data"
                      placeholder="CVV"
                      type="text"
                    />
                  </div>
                  <br />
                </div>
                <input className="submit" type="submit" value={"PAY"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import "./Checkout.css";
import { useFetchImg } from "../../hooks/useHomeData";
import cardIcon from "/card.svg";
export const CheckoutPage = () => {
  const Imgs = useFetchImg();
  const BannerStyle = {
    backgroundImage: `url(${Imgs[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="banner-container" style={BannerStyle}>
      <div className="banner-content">
        {Imgs != undefined ? (
          <img src={`${Imgs[0]}`} alt="product-img" className="banner-image" />
        ) : null}
        <div className="info-container">
          <div className="buy-product-info">
            <h1>Camera123</h1>
            <p>$4353</p>
          </div>
          <div className="card-info">
            <img className="card-icon" src={cardIcon} alt="" />
            <form className="form-card" action="send-info-card">
              <input placeholder="CARD NUMBER" type="text" />
              <br />
              <input placeholder="CARDHOLDER NAME" type="text" />
              <br />
              <div className="important-card-info">
                <div >
                  <label htmlFor="">EXPIRY MOUNTH</label>
                <input className="specific-data" placeholder="MM" type="text" />
                </div>
                <br />
                  <div>
                    <label htmlFor="">EXPIRY YEAR</label>
                  <input className="specific-data" placeholder="YY" type="text" />
                  </div>
                <br />

              <div>
                <label htmlFor="">CVC</label>
              <input className="specific-data" placeholder="CVV" type="text" />
              </div>
                <br />
              </div>
              <input className="submit" type="submit" value={"PAY"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

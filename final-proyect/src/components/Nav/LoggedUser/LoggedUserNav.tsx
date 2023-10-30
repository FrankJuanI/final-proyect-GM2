import "../Nav.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wishlist } from "../WishList/Wishlist";
import { UserOptions } from "../UserOptions/UserOptions";
import { useContext } from "react";
import { LoginStatusContext } from "../../../context/LoginStatusContext";
export function LoggedUserNav() {
  const [ShowProfileOptions, setShowProfileOptions] = useState<boolean>(false);
  const { auth } = useContext(LoginStatusContext);

  const navigate = useNavigate();

  const [showWishlist, setShowWishList] = useState<boolean>(false);

  useEffect(() => {
    const cart = JSON.stringify(localStorage.getItem("cart"));
  }, []);

  const handleShowWishListButton = () => {
    setShowWishList(!showWishlist);
  };

  const hanldeUserImgClick = () => {
    setShowProfileOptions(!ShowProfileOptions);
  };

  return (
    <>
      <ul>
        <li>
          <button className="nav-buttons" onClick={() => navigate("/cart")}>
            Cart
          </button>
        </li>
        <li style={{ position: "relative" }}>
          <button
            className={`nav-buttons ${showWishlist ? "active" : ""}`}
            onMouseDown={() => handleShowWishListButton()}
            onBlur={() => setShowWishList(false)}
          >
            Wishlist
          </button>
          {showWishlist && <Wishlist />}
        </li>
        <li>
          <button className="nav-buttons" onClick={() => navigate("/Shop")}>
            Shop
          </button>
        </li>
      </ul>

      <ul style={{ position: "relative" }}>
        <li>
          <img
            className="user-image"
            src={auth.image}
            alt="user-image"
            onClick={() => hanldeUserImgClick()}
          />
          {ShowProfileOptions ? <UserOptions /> : null}
        </li>
      </ul>
    </>
  );
}

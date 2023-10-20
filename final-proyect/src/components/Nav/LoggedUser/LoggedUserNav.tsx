import "./LoggedUserNav.css";
import "../Nav.css";
import { useNavigate } from "react-router-dom";
import userImg from "/user.png";
import exitImg from "/exit.png";

export function LoggedUserNav({ className }) {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate("/metrics")}>Metric</button>
        </li>
        <li>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </li>
        <li>
          <button onClick={() => navigate("/Wishlist")}>Wishlist</button>
        </li>
        <li>
          <button onClick={() => navigate("/Shop")}>Shop</button>
        </li>
      </ul>
      <ul className="user-options">
        <li>
          <button>
            <img src={userImg} alt="" />
            Profile
          </button>
        </li>
        <li>
          <button>
            <img src={exitImg} alt="" />
            Log out
          </button>
        </li>
      </ul>
      <a href="">
        <img
          className="user-image"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="user-image"
          onClick={() => navigate("/user")}
        />
      </a>
    </>
  );
}

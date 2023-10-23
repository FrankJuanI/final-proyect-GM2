import "../Nav.css";
import { useNavigate } from "react-router-dom";
import userImg from "/user.png";
import exitImg from "/exit.png";
import { useLoginStatus } from "../../../context/LoginStatusContext";

export function LoggedUserNav() {
  
  const {signOut} = useLoginStatus()
  
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
      
      <ul>
        <li>
          <a href="">
            <img
            className="user-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user-image"
            onClick={() => navigate("/user")}
            />
          </a>
          <ul className="user-options">
        <li id="profile-button" onClick={() => navigate("/profile")}>
          <button>
            <img src={userImg} alt=""  />
            Profile
          </button>
        </li>
        <li>
          <button onClick={()=> signOut()}>
            <img src={exitImg} alt="" />
            Sign Out
          </button>
        </li>
      </ul>
        </li>
      </ul>
      
    </>
  );
}

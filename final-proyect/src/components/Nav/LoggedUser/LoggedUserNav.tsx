import "../Nav.css";
import { useNavigate } from "react-router-dom";

export function LoggedUserNav() {
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

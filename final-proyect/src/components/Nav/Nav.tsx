import logo from "../../assets/gm2-logo.webp";
import "./Nav.css";

export function Nav() {
  return (
    <nav>
      <div className="about-info">
        <img src={logo} alt="logo" />
        <p>The best ecommerce ever</p>
      </div>
      <div className="interactions">
        <ul>
          <li>
            <a className="link" href="">
              Metric
            </a>
          </li>
          <li>
            <a className="link" href="">
              Cart
            </a>
          </li>
          <li>
            <a className="link" href="">
              Wishlist
            </a>
          </li>
          <li>
            <a className="link" href="">
              Shop
            </a>
          </li>
        </ul>
        <a href="">
          <img
            className="user-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user-image"
          />
        </a>
      </div>
    </nav>
  );
}

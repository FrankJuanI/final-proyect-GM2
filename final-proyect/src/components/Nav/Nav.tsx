import { useLoginStatus } from "../../context/LoginStatusContext";
import { LoggedUserNav } from "./LoggedUser/LoggedUserNav";
import "./Nav.css";
import { NotLoggedUserNav } from "./NotLoggedUser/NotLoggedUserNav";
export function Nav() {
  const { isAuth } = useLoginStatus();
import IconMenu from "../../../public/NavResponsiveIcon.svg";
import { useState } from "react";
export function Nav() {

  const [menu, setMenu] = useState(true)
  const toggleMenu= ()=>{
      setMenu(!menu)
  }

  return (
    <nav>
      <div className="about-info">
        <img src="gm2-logo.webp" alt="logo" />
        <p>The best ecommerce ever</p>
        <button className="button-menu" onClick={ toggleMenu}>
          <img src={IconMenu} alt="Menu" />
        </button>
      </div>
      <div className="interactions">
        {isAuth ? <LoggedUserNav /> : <NotLoggedUserNav />}
      <div className={`interactions ${menu ? `IsNoActive` : `` }`}>
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

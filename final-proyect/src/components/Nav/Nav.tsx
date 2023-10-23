import { useLoginStatus } from "../../context/LoginStatusContext";
import { LoggedUserNav } from "./LoggedUser/LoggedUserNav";
import { NotLoggedUserNav } from "./NotLoggedUser/NotLoggedUserNav";
import IconMenu from "/NavResponsiveIcon.svg";
import gm2Logo from "/gm2-logo.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Nav() {
  const { isAuth } = useLoginStatus();
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const navigate = useNavigate();
  return (
    <nav>
      <div className="about-info">
        <button className="box-logo" onClick={() => navigate("/")}>
          <img className="logo" src={gm2Logo} alt="logo" />
        </button>
        <p className="nav-title">The best ecommerce ever</p>
        <button className={`button-menu`} onClick={toggleMenu}>
          <img src={IconMenu} alt="Menu" />
        </button>
      </div>
      <div className={`interactions ${menu ? `IsNoActive` : ``}`}>
        {isAuth ? <LoggedUserNav /> : <NotLoggedUserNav />}
      </div>
    </nav>
  );
}

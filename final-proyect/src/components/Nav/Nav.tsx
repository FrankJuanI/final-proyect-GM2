import { useLoginStatus } from "../../context/LoginStatusContext";
import { LoggedUserNav } from "./LoggedUser/LoggedUserNav";
import { NotLoggedUserNav } from "./NotLoggedUser/NotLoggedUserNav";
import IconMenu from "/NavResponsiveIcon.svg";
import { useState } from "react";

export function Nav() {
  const { isAuth } = useLoginStatus();
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const NavStyle = {
    height: isAuth ? "100%" : "100px",
  };
  return (
    <nav style={NavStyle}>
      <div className="about-info">
        <img className="logo" src="gm2-logo.webp" alt="logo" />
        <p>The best ecommerce ever</p>
        <button
          className={`button-menu ${!isAuth ? `desenable-button` : ``}`}
          onClick={toggleMenu}
        >
          <img src={IconMenu} alt="Menu" />
        </button>
      </div>
      <div className="interactions">
        {isAuth ? (
          <LoggedUserNav
            className={`interactions ${menu ? `IsNoActive` : ``}`}
          />
        ) : (
          <NotLoggedUserNav />
        )}
      </div>
    </nav>
  );
}

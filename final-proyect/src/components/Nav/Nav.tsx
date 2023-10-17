import { useLoginStatus } from "../../context/LoginStatusContext";
import { LoggedUserNav } from "./LoggedUser/LoggedUserNav";
import "./Nav.css";
import { NotLoggedUserNav } from "./NotLoggedUser/NotLoggedUserNav";

export function Nav() {
  const { isAuth } = useLoginStatus();

  return (
    <nav>
      <div className="about-info">
        <img src="gm2-logo.webp" alt="logo" />
        <p>The best ecommerce ever</p>
      </div>
      <div className="interactions">
        {isAuth ? <LoggedUserNav /> : <NotLoggedUserNav />}
      </div>
    </nav>
  );
}

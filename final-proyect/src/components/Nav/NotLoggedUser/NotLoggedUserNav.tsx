import { useNavigate } from "react-router-dom";

export function NotLoggedUserNav() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return <button onClick={handleClick}>Login</button>;
}

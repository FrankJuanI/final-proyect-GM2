import { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import "./YouAreNotLogguedIn.css";
import { useNavigate } from "react-router-dom";
export function YouAreNotLoggedIn() {
  const navigate = useNavigate();
  const [numCount, setNumCount] = useState(2);

  useEffect(() => {
    const pepe = async () => {
      await delay(1000);
      setNumCount(numCount - 1);
      await delay(1000);
      navigate("/login");
    };
    pepe();
  }, []);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      <Nav />
      <div className="not-log">
        <h3>You are not logged in</h3>
        <p>Redirecting to Home in {numCount}</p>
      </div>
    </>
  );
}

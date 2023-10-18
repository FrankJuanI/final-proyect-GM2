import { useEffect } from "react";
import { useLoginStatus } from "../../context/LoginStatusContext.tsx";
import { Nav } from "../Nav/Nav.tsx";
import { useNavigate } from "react-router-dom";

export function Metrics() {
  const navigate = useNavigate();
  const { isAuth } = useLoginStatus();

  useEffect(() => {
    if (!isAuth) {
      navigate("/not-logguedin");
    }
  }, []);

  return (
    <>
      <Nav />
    </>
  );
}

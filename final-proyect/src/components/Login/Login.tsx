import { Nav } from "../Nav/Nav";
import "./Login.css";
import { useLoginStatus } from "../../context/LoginStatusContext.tsx";
import { IncorrectCredenttials } from "../IncorrectCredentials/IncorrectCredentials.tsx";
import { useEffect } from "react";
import LoginImage from "/loginCardImage.svg"
import { useNavigate } from "react-router-dom";

export function Login() {
  const { auth, getUserLogin, isAuth } = useLoginStatus();
  const navigate = useNavigate()
  
  let emailInput = "";
  let passwordInput = "";
  
  const handleLoginButton = async (
    emailInput: string,
    passwordInput: string
  ) => {
    await getUserLogin(emailInput, passwordInput);
  };


  if (isAuth) {
    navigate("/");
  }


  return (
    <>
      <Nav />
      <div className="login-card-container">
        <div className="login-card">
          {auth != undefined ? <IncorrectCredenttials /> : null}
          <div className="first-section">
            <h1>Welcome Back!</h1>
            <h3>The best ecommerce ever</h3>
            <img src={LoginImage} alt="" />
          </div>
          <div className="second-section">
            <h2>Sign In</h2>
            <div className="inputs-container">
              <div>
                <h5>Email</h5>
                <input
                  type="text"
                  onChange={(event) => {
                    emailInput = event.target.value;
                  }}
                  defaultValue={"kminchelle"}
                />
              </div>
              <div>
                <h5>Password</h5>
                <input
                  type="text"
                  onChange={(event) => {
                    passwordInput = event.target.value;
                  }}
                  defaultValue="0lelplR"
                />
              </div>
            </div>
            <div className="buttons-container">
              <button
                id="signin-button"
                onClick={() => handleLoginButton(emailInput, passwordInput)}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

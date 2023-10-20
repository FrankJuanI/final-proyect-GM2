import { Nav } from "../Nav/Nav";
import "./Login.css";
import { useLoginStatus } from "../../context/LoginStatusContext.tsx";
import { IncorrectCredenttials } from "../IncorrectCredentials/IncorrectCredentials.tsx";

export function Login() {
  const { auth, getUserLogin /*login*/ } = useLoginStatus();

  let emailInput = "";
  let passwordInput = "";

  const handleLoginButton = async (
    emailInput: string,
    passwordInput: string
  ) => {
    await getUserLogin(emailInput, passwordInput);
    // await login(emailInput, passwordInput);
  };

  return (
    <>
      <Nav />
      <div className="login-card-container">
        <div className="login-card">
          {auth != undefined ? <IncorrectCredenttials /> : null}
          <div className="first-section"></div>
          <div className="second-section">
            <h2>Sign In</h2>
            <div className="inputs-container">
              <div>
                <h5>Email</h5>
                <input
                  type="text"
                  onChange={(event) => {
                    emailInput = event.target.value;
                    console.log(emailInput);
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
                    console.log(passwordInput);
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
              <p>Or</p>
              <button id="google-button">
                <img src="search.png" alt="" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      {auth === "Invalid credenttials" ? <IncorrectCredenttials /> : null}
    </>
  );
}

import { Nav } from "../Nav/Nav";
import "./Login.css";

export function Login() {
  return (
    <>
      <Nav />
      <div className="login-card-container">
        <div className="login-card">
          <div className="first-section"></div>
          <div className="second-section">
            <h2>Sign In</h2>
            <div className="inputs-container">
              <div>
                <h5>Email</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Password</h5>
                <input type="text" />
              </div>
            </div>
            <div className="buttons-container">
              <button id="signin-button">Sign In</button>
              <p>Or</p>
              <button id="google-button">
                <img src="search.png" alt="" />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Login() {
  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="first-section"></div>
        <div className="second-seccion">
          <h2>Sign In</h2>
          <div className="inputs-container">
            <div>
              <h5>Username</h5>
              <input type="text" />
            </div>
            <div>
              <h5>Password</h5>
              <input type="text" />
            </div>
          </div>
        </div>{" "}
        <div className="buttons-container">
          <button>Sign In</button>
          <p>Or</p>
          <button>
            <img src="" alt="" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

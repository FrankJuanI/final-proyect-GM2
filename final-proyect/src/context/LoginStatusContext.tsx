import { createContext, useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginStatusContext = createContext([]);

export const useLoginStatus = () => useContext(LoginStatusContext);

interface Auth {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  userName: string;
}

export const LoginStatusProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();

  const getUserLogin = useCallback(
    async (username: string, password: string) => {
      try {
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const data = await res.json();
        if (data.message != undefined) {
          setAuth(data.message);
          return;
        } else {
          setAuth(data);
          navigate("/home");
        }
      } catch (err) {
        console.log(err);
      }
    },
    [auth]
  );

  return (
    <LoginStatusContext.Provider value={{ auth, getUserLogin, isAuth }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

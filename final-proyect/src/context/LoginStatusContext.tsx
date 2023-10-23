import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";
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

export const LoginStatusProvider = ({ children, login }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [auth, setAuth] = useState<Auth[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (login != undefined) {
      setAuth(login);
      setIsAuth(true);
    }
  }, []);

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
            setIsAuth(true);
            console.log(typeof data);
            localStorage.setItem("session", JSON.stringify(data));
            navigate("/");
          }
        } catch (err) {
          console.log(err);
        }
    },
    [auth]
  );

    const signOut = () => {
      localStorage.removeItem("session");
      setAuth(undefined);
      setIsAuth(false);
      navigate("/");
    }


  return (
    <LoginStatusContext.Provider value={{ auth, getUserLogin, isAuth, signOut }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

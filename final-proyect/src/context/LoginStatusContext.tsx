import { createContext, useContext, useCallback, useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { IncorrectCredenttials } from "../components/IncorrectCredentials/IncorrectCredentials";

export const LoginStatusContext = createContext([]);

export const useLoginStatus = () => useContext(LoginStatusContext);

interface Auth{
  email: string,
  firstName: string,
  gender: string,
  id: number,
  image: string,
  lastName: string,
  token: string,
  userName: string
}


export const LoginStatusProvider = ({ children }) => {
  const [auth, setAuth] = useState(); 
  const [authenticated, setAuthenticated] = useState<boolean>()
  const navigate = useNavigate();


  const getUserData = useCallback(
    async(username: string, password: string) => {
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
        if (data.message != undefined){
          setAuthenticated(false)
          return
        }else{
          navigate("/home")
        }
      } catch (err) {
        console.log(err);
      }
    },[auth]);

  return (
    <LoginStatusContext.Provider value={{ auth, getUserData }}>
      {children}
      {authenticated === false ? <IncorrectCredenttials/> : null}
    </LoginStatusContext.Provider>
  );
};

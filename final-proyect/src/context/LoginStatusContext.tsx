import { createContext, useContext, useState, useCallback } from "react";

export const LoginStatusContext = createContext([]);

export const useLoginStatus = () => useContext(LoginStatusContext);

export const LoginStatusProvider = ({ children }) => {
  const [auth, setAuth] = useState();

  const getUserData = useCallback(
    async (username: string, password: string) => {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          // expiresInMins: 60, // optional
        }),
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
    [auth]
  );

  return (
    <LoginStatusContext.Provider value={{ getUserData }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

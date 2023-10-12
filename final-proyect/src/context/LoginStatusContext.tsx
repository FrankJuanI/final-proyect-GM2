import { createContext, useContext, useCallback } from "react";

export const LoginStatusContext = createContext([]);

export const useLoginStatus = () => useContext(LoginStatusContext);

export const LoginStatusProvider = ({ children }) => {
  const getUserData = useCallback(
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
        console.log(data);
      } catch (err) {
        console.log(err);
        // return <IncorrectCredentials />;
      }
    },
    []
  );

  return (
    <LoginStatusContext.Provider value={{ getUserData }}>
      {children}
    </LoginStatusContext.Provider>
  );
};

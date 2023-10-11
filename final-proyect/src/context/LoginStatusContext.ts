import { createContext, useContext } from "react";

export const LoginStatusContext = createContext([""]);

export const UseDataContext = () => useContext(LoginStatusContext);

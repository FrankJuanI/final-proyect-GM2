import { useEffect } from "react";

export const useUserAuth = ({ username, password }) => {
  useEffect(() => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: { username },
        password: { password },
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  }, []);
  console.log("a");
};

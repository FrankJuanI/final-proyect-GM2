import "./App.css";
import { Home } from "./components/Home/Home";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx";
import { useUserAuth } from "./hooks/useUserAuth.ts";

function App() {
  const { data } = useFetch();
  useUserAuth();
  return (
    <>
      <DataContext.Provider value={data}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;

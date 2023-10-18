import "./App.css";
import { Shop } from "./components/Shop/Shop.tsx";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx";
import { LoginStatusProvider } from "./context/LoginStatusContext.tsx";
import { Home } from "./components/Home/Home.tsx";
import { ProductsDetails } from "./components/ProductDetails/ProductDetails.tsx";

function App() {
  const { data } = useFetch();
  return (
    <>
      <DataContext.Provider value={data}>
        <LoginStatusProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </LoginStatusProvider>
      </DataContext.Provider>
    </>
  );
}

export default App;

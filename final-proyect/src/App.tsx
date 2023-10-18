import "./App.css";
import { Home } from "./components/Home/Home";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx";
import { LoginStatusProvider } from "./context/LoginStatusContext.tsx";
import { ProductsDetails } from "./components/ProductDetails/ProductDetails.tsx";
import { Cart } from "./components/Cart/Cart.tsx";

function App() {
  const { data } = useFetch();
  return (
    <>
      <DataContext.Provider value={data}>
        <LoginStatusProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product-detail/:id" element={<ProductsDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </LoginStatusProvider>
      </DataContext.Provider>
    </>
  );
}

export default App;

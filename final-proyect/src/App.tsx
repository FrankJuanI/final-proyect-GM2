import "./App.css";
import { Home } from "./components/Home/Home";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx";
import { LoginStatusProvider } from "./context/LoginStatusContext.tsx";
import { ProductsDetails } from "./components/ProductDetails/ProductDetails.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import { YouAreNotLoggedIn } from "./components/YouAreNotLoggedIn/YouAreNotLoggedIn.tsx";
import { Metrics } from "./components/Metrics/Metrics.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";

function App() {
  const { data } = useFetch();
  return (
    <>
      <DataContext.Provider value={data}>
        <LoginStatusProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product-detail/:id" element={<ProductsDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/not-loggedin" element={<YouAreNotLoggedIn />} />
              <Route path="/metrics" element={<Metrics />} />
            </Routes>
          </CartContextProvider>
        </LoginStatusProvider>
      </DataContext.Provider>
    </>
  );
}

export default App;

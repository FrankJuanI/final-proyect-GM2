import "./App.css";
import { Shop } from "./components/Shop/Shop.tsx";
import { useFetch } from "./hooks/useFetch.ts";
import { DataContext } from "./context/DataContext.ts";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login.tsx";
import {
  LoginStatusProvider,
  useLoginStatus,
} from "./context/LoginStatusContext.tsx";
import { ProductsDetails } from "./components/ProductDetails/ProductDetails.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import { YouAreNotLoggedIn } from "./components/YouAreNotLoggedIn/YouAreNotLoggedIn.tsx";
import { Metrics } from "./components/Metrics/Metrics.tsx";
import { CartContextProvider } from "./context/CartContext.tsx";
import { Home } from "./components/Home/Home.tsx";

function App() {
  const { data } = useFetch();

  const login = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    console.log(session);
    if (session != null) {
      console.log("app session: ", session);
      return session;
    }
  };

  return (
    <>
      <LoginStatusProvider login={login()}>
        <DataContext.Provider value={data}>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product-detail/:id" element={<ProductsDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/not-loggedin" element={<YouAreNotLoggedIn />} />
              <Route path="/metrics" element={<Metrics />} />
            </Routes>
          </CartContextProvider>
        </DataContext.Provider>
      </LoginStatusProvider>
    </>
  );
}

export default App;

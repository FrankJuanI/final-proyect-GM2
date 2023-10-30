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
import { CartContextProvider } from "./context/CartContext.tsx";
import { Home } from "./components/Home/Home.tsx";
import { CheckoutPage } from "./components/CheckoutPage/Checkout.tsx";
import { UserProfile } from "./components/UserProfile/UserProfile.tsx";
import { WishListContextProvider } from "./context/WishListContext.tsx";
import { Nav } from "./components/Nav/Nav.tsx";

function App() {
  const { data } = useFetch();

  const login = () => {
    const session = JSON.parse(localStorage.getItem("session"));
    if (session != null) {
      return session;
    }
  };

  return (
    <>
      <LoginStatusProvider login={login()}>
        <DataContext.Provider value={data}>
          <CartContextProvider>
            <WishListContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Shop />} />
                <Route
                  path="/product-detail/:id"
                  element={<ProductsDetails />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/not-loggedin" element={<YouAreNotLoggedIn />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/checkout/:productId" element={<CheckoutPage />} />
              </Routes>
            </WishListContextProvider>
          </CartContextProvider>
        </DataContext.Provider>
      </LoginStatusProvider>
    </>
  );
}

export default App;

import { Nav } from "../Nav/Nav.tsx";
import "./Shop.css";
import { Products } from "../Products/Products.tsx";
import { SideBar } from "../SideBar/SideBar.tsx";

export function Shop() {
  return (
    <>
      <Nav />
      <div>
        <Products />
        <SideBar />
      </div>
    </>
  );
}

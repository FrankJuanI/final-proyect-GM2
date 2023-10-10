import { Nav } from "../Nav/Nav.tsx";
import "./Home.css";
import { Products } from "../Products/Products.tsx";
import { SideBar } from "../SideBar/SideBar.tsx";
export function Home() {
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

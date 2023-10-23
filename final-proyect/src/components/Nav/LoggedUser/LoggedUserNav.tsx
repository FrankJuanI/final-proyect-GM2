import "../Nav.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Wishlist } from "../WishList/Wishlist";
import { UserOptions } from "../UserOptions/UserOptions";
export function LoggedUserNav() {


  const [ShowProfileOptions, setShowProfileOptions] = useState<boolean>(false)

  const navigate = useNavigate();

  const [showWishlist, setShowWishList] = useState<boolean>(false)


  useEffect(()=>{
    const cart = JSON.stringify(localStorage.getItem("cart"))
  },[])

  const handleShowWishListButton = ()=> {
    setShowWishList(!showWishlist)
  }

  const hanldeUserImgClick = () => {
    setShowProfileOptions(!ShowProfileOptions)
  }

  return (
    <>
      <ul>
        <li>
          <button onClick={() => navigate("/cart")}>Cart</button>
        </li>
        <li style={{position:"relative"}}>
          <button onClick={() => handleShowWishListButton()}>Wishlist</button>
          {showWishlist === true? <Wishlist/> : null}
        </li>
        <li>
          <button onClick={() => navigate("/Shop")}>Shop</button>
        </li>
      </ul>
      
      <ul style={{position:"relative"}}>
        <li>
            <img
            className="user-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="user-image"
            onClick={() => hanldeUserImgClick()}
            />
          { ShowProfileOptions ? <UserOptions/> : null  }   
        </li>
      </ul>
      
    </>
  );
}

import "../Nav.css"
import userImg from "/user.png";
import exitImg from "/exit.png";
import { useNavigate } from "react-router-dom";
import { useLoginStatus } from "../../../context/LoginStatusContext";

export function UserOptions ({}){
    
    const navigate = useNavigate()
    const {signOut} = useLoginStatus()

    return (
        <ul className="user-options">
            <li id="profile-button" onClick={() => navigate("/profile") }>
              <button>
                <img src={userImg} alt=""  />
                Profile
              </button>
            </li>
            <li>
              <button onClick={()=> signOut()}>
                <img src={exitImg} alt="" />
                Sign Out
              </button>
            </li>
        </ul>
    )
}
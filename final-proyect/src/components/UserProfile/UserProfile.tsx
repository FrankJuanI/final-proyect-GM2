  import "./UserProfile.css";
  import { Nav } from "../Nav/Nav";
  import { useState, useEffect } from "react";
  import { useContext } from "react";
  import { LoginStatusContext } from "../../context/LoginStatusContext";
  import { PersonalInformation } from "../../PersonalInformation/PersonalInformation";
  import { useWishListContext } from "../../context/WishListContext";
import { WishProductInProfile } from "../../WishListInProfile/WishListInProfile";

  export function UserProfile() {
    const [userData, SetUserData] = useState<User>({
      age: 0,
      birthDate: "",
      email: "",
      firstName: "",
      gender: "",
      height: 0,
      id: 0,
      image: "",
      lastName: "",
      password: "",
      phone: "",
      university: "",
      username: "",
      weight: 0,
    });

    useEffect(() => {
      fetch(`https://dummyjson.com/users/${auth.id}`)
        .then((res) => res.json())
        .then((user) => {
          SetUserData(user);
        });
    }, []);

    const { auth } = useContext(LoginStatusContext);

    if (!auth) {
      return <div>Loading...</div>; // o cualquier otro componente de carga o mensaje que prefieras
    }


      const [activeTab, setActiveTab] = useState("tab-01");
  
      const handleTabClick = (tabId) => {
        setActiveTab(tabId)}

       const { wishlist } = useWishListContext([])
    return (
      <>
        <div className="user-content">
          <Nav />
          <div className="topper">
            <h1>My Profile</h1>
            <div className="principal-information">
              <img src={auth.image} />
              <h2 className="username">{auth.username}</h2>
              <p className="id">{`#00${auth.id}`}</p>
            </div>
          </div>
          <div className="basic-information-row">
          <div className="tabs-component">
        <div className="tabs-button-wrapper">
          <div
            id="tab-01"
            className={`tab-button ${activeTab === "tab-01" ? "active" : ""}`}
            onClick={() => handleTabClick("tab-01")}
          >
            <button>Personal Info</button>
          </div>
          <div
            id="tab-02"
            className={`tab-button ${activeTab === "tab-02" ? "active" : ""}`}
            onClick={() => handleTabClick("tab-02")}
          >
            <button>Wish List</button>
          </div>
        </div>
        <div className="tabs-content-wrapper">
          <div
            id="content-tab-01"
            className={`tab-content ${activeTab === "tab-01" ? "active" : ""}`}
          >
            <h3>Your info</h3>
            <PersonalInformation userData={userData} />
          </div>
          <div
            id="content-tab-02"
            className={`tab-content ${activeTab === "tab-02" ? "active" : ""}`}
          >
            <h3>Your WishList</h3>
            <div className="wishlist-content">
            {
              wishlist.length != 0 ? wishlist.map((product => <WishProductInProfile product={product}/>)) : <p>Not wished products</p>
            }
            </div>
      
          </div>
        </div>
      </div>
            <div className="container-profile"></div>
          </div>
        </div>
      </>
    );
  }

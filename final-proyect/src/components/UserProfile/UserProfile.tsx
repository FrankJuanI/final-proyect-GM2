import "./UserProfile.css";
import { Nav } from "../Nav/Nav";
import {useState, useEffect } from "react";
import user from "/user.svg"
import age from "/age-icon.svg"
import birthday from "/birthday.svg"
import height from "/height-icon.svg"
import weight from "/weight-icon.svg"
import id from "/id-number.svg"
import phone from "/phone.svg"
import email from "/email-icon.svg"
import university from "/university-icon.svg"
import password from "/password-icon.svg"

export function UserProfile() {
    type User = {
        age: number;
        birthDate: string;
        email: string;
        firstName: string;
        gender: string;
        height: number;
        id: number;
        image: string;
        lastName: string;
        password: string;
        phone: string;
        university: string;
        username: string;
        weight: number;
      };
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
    fetch("https://dummyjson.com/users/1")
      .then((res) => res.json())
      .then((user)=>{
        SetUserData(user)
      });
  }, []);


  return (
    <>
      <Nav />
      <div className="topper">
        <h1>User Profile</h1>
      </div>
      <div className="container-profile">
        <div className="principal-information">
          <img src={userData.image} />
          <h2>{userData.username}</h2>
        </div>
        <div className="basic-info">
        <ol>
            <li className="info-item"><img className="img-info" src={id} alt="" /><p className="">{userData.id}</p></li>
            <li className="info-item"><img className="img-info" src={user} alt="user-icon" /><p className="">{`${userData.firstName} ${userData.lastName}`}</p></li>
            <li className="info-item"><img className="img-info" src={birthday} alt="" /><p className="">{userData.birthDate}</p></li>
            <li className="info-item"><img className="img-info" src={age} alt="" /><p className="">{`${userData.age} years`}</p></li>
            <li className="info-item"><img className="img-info" src={height} alt="" /><p className="">{`${userData.height} cm`}</p></li>
            <li className="info-item"><img className="img-info" src={weight} alt="" /><p className="">{`${userData.weight} kg`}</p></li>
            <li className="info-item"><img className="img-info" src={phone} alt="" /><p className="">{userData.phone}</p></li>
            <li className="info-item"><img className="img-info" src={email} alt="" /><p className="">{userData.email}</p></li>
            <li className="info-item"><img className="img-info" src={university} alt="" /><p className="">{userData.university}</p></li>
            <li className="info-item"><img className="img-info" src={password} alt="" /><p className="">{userData.password}</p></li>
        </ol>
        </div>
      </div>
    </>
  );
}

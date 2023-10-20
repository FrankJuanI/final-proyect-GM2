
import "../UserProfile.css"
import Icon from "../assets/bxs-rename.svg"
import Icon1 from "../assets/bxs-envelope.svg"
import Icon2 from "../assets/bx-phone.svg"
import Icon3 from "../assets/bx-cake.svg"
import Icon4 from "../assets/bx-user.svg"
import Icon5 from "../assets/bx-calendar-event.svg"
import Icon6 from "../assets/bx-male-female.svg"
import Icon7 from "../assets/bx-key.svg"



const user = {
    firstName: 'Seba',
    lastName: 'Kaplanski',
    age: 28,
    birthDate: '7/1/1995',
    telephone: '12345678',
    username: 'atuny0',
    email: 'atuny0@sohu.com',
    gender: 'male',
    password: '9uQFF1Lh',
}

export function UserProfile() {

    return (
        <div className="userProfileContainer">
            <img className="imagen" src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" alt="" />
            <div>
                <div className="row">
                    <img src={Icon} alt="" />
                    <p>First name</p>
                    <p>{user.firstName}</p>
                </div>
                <div className="row">
                    <img src={Icon} alt="" />
                    <p>Last name</p>
                    <p>{user.lastName}</p>
                </div>
                <div className="row">
                    <img src={Icon5} alt="" />
                    <p>Age</p>
                    <p>{user.age}</p>
                </div>
                <div className="row">
                    <img src={Icon3} alt="" />
                    <p>Birth date</p>
                    <p>{user.birthDate}</p>
                </div>
                <div className="row">
                    <img src={Icon2} alt="" />
                    <p>Telephone</p>
                    <p>{user.telephone}</p>
                </div>
                <div className="row">
                    <img src={Icon4} alt="" />
                    <p>Username</p>
                    <p>{user.username}</p>
                </div>
                <div className="row">
                    <img src={Icon1} alt="" />
                    <p>Email</p>
                    <p>{user.email}</p>
                </div>
                <div className="row">
                    <img src={Icon6} alt="" />
                    <p>Gender</p>
                    <p>{user.gender}</p>
                </div>
                <div className="row">
                    <img src={Icon7} alt="" />
                    <p>Password</p>
                    <p>{user.password}</p>
                </div>

                <div></div>
            </div>

        </div>
    )
}


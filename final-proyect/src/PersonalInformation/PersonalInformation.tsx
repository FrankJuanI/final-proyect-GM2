import userIcon from "/user.svg";
import ageIcon from "/age-icon.svg";
import birthdayIcon from "/birthday.svg";
import heightIcon from "/height-icon.svg";
import weightIcon from "/weight-icon.svg";
import phoneIcon from "/phone.svg";
import emailIcon from "/email-icon.svg";
import universityIcon from "/university-icon.svg";
import passwordIcon from "/password-icon.svg";
import { InfoItemRow } from "../InfoItemRow/InfoItemRow";

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

export const PersonalInformation = ({ userData }: { userData: User }) => {
  return (
    <div className="basic-info">
      <ol>
        <InfoItemRow
          ImgRow={userIcon}
          userData={userData}
          data="firstName"
          text={""}
        />
        <InfoItemRow
          ImgRow={birthdayIcon}
          userData={userData}
          data="birthDate"
          text={""}
        />
        <InfoItemRow
          ImgRow={ageIcon}
          userData={userData}
          data="age"
          text={"years"}
        />
        <InfoItemRow
          ImgRow={heightIcon}
          userData={userData}
          data="height"
          text={"Cm"}
        />
        <InfoItemRow
          ImgRow={weightIcon}
          userData={userData}
          data="weight"
          text={"Kg"}
        />
        <InfoItemRow
          ImgRow={phoneIcon}
          userData={userData}
          data="phone"
          text={""}
        />
        <InfoItemRow
          ImgRow={emailIcon}
          userData={userData}
          data="email"
          text={""}
        />
        <InfoItemRow
          ImgRow={universityIcon}
          userData={userData}
          data="university"
          text={""}
        />
        <InfoItemRow
          ImgRow={passwordIcon}
          userData={userData}
          data="password"
          text={""}
        />
      </ol>
    </div>
  );
};

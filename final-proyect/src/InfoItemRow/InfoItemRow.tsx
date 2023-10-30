export const InfoItemRow = ({ ImgRow, userData, data, text }) => {
    return (
      <li className="info-item">
        <img className="img-info" src={ImgRow} alt="" />
        <p className="">{`${userData[data]} ${text}`}</p>
      </li>
    );
  };
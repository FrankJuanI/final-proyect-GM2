import { Nav } from "../Nav/Nav";
import { useFetchImg } from "../../hooks/useHomeData";
import "./Home.css";
import { useEffect } from "react";
import { useHomeData } from "../../hooks/useHomeData";
import userIcon from "/user-icon.svg";

export const Home = () => {
  const Imgs = useFetchImg();
  const { comments, about } = useHomeData();

  useEffect(() => {}, [comments?.length]);

  const BannerStyle = {
    backgroundImage: `url(${Imgs[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Nav />
      <div className="home-content">
        <div className="about">
          <p className="title">Why choose us?</p>
          {about != null ? <h2 className="about-text">{about}</h2> : null}
        </div>
        <div className="latest-products">
          <div className="banner-img" style={BannerStyle}>
            <div className="banner">
              {Imgs != undefined ? <img src={`${Imgs[0]}`} alt="" /> : null}
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <p className="title">Comments</p>
        {comments?.map((comment) => {
          return (
            <div className="comment" key={comment.id}>
              <div className="user">
                <img src={userIcon} alt="user-icon" />
                <p>{comment.user.username}</p>
              </div>
              <div className="comment-text">
                <p>{comment.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

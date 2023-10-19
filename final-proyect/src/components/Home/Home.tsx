import { Nav } from "../Nav/Nav";
import { useFetchImg } from "../../hooks/useHomeData";
import "./Home.css";
import { useEffect } from "react";
import { useHomeData } from "../../hooks/useHomeData";
import userIcon from "../../../public/user-icon.svg";

export const Home = () => {
  const Imgs = useFetchImg();
  const { comments, about } = useHomeData();

  useEffect(() => {
    console.log(comments, about);
  }, [comments?.length]);

  const BannerStyle = {
    backgroundImage: `url(${Imgs[0]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Nav />
      <div className="latest-products">
        <h2 className="title">Latest Product</h2>
        <div className="banner-img" style={BannerStyle}>
          <div className="banner">
            {Imgs != undefined ? <img src={`${Imgs[0]}`} alt="" /> : null}
          </div>
        </div>
      </div>
      <div className="about">
        <p className="title">About</p>
        {about != null ? <h2 className="about-text">{about}</h2> : null}
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

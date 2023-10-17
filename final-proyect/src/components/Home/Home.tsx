import { Nav } from "../Nav/Nav";
import { useFetchImg } from "../../hooks/useBannerImg";
import "./Home.css";
import { useEffect } from "react";
import { useHomeData } from "../../hooks/UseHomeData";

export const Home = () => {
  const Imgs = useFetchImg();
  const { comments, about } = useHomeData();

  useEffect(() => {
    console.log(comments, about);
  }, [comments?.length]);

  return (
    <>
      <Nav />
      <div className="latest-products">
        <h2 className="home-title">Latest Products</h2>
        <div className="Banner-img">
          {Imgs != undefined ? <img src={`${Imgs[0]}`} alt="" /> : null}
        </div>
      </div>
      <div className="about">
        <p>About</p>
        {about != null ? <h2>{about}</h2> : null}
      </div>
      <div className="comments">
        {comments?.map((co) => {
          return (
            <div className="comment">
              <p>{co.user.username}</p>
              <p>{co.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

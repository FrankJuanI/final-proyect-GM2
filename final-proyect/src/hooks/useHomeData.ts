import { useEffect, useState } from "react";

type comment = {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
};
export const useFetchImg = () => {
  const [productImgs, setProductImgs] = useState([]);
  const randomNum = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${randomNum}`)
      .then((res) => res.json())
      .then((datafetch) => setProductImgs(datafetch.images));
  }, []);
  return productImgs;
};

export const useHomeData = () => {
  const [comments, setComments] = useState<comment[]>();
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit recusandae minima? Laudantium quaerat veritatis, magnam doloremque nobis officia assumenda possimus explicabo tenetur at consequatur a ex eum hic nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  useEffect(() => {
    fetch("https://dummyjson.com/comments?limit=14")
      .then((res) => res.json())
      .then((allcomments) => {
        setComments(allcomments.comments);
      });
  }, []);

  return { comments, about };
};

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

export const useHomeData = () => {
  const [comments, setComments] = useState<comment[]>();
  const about =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit recusandae minima? Laudantium quaerat veritatis, magnam doloremque nobis officia assumenda possimus explicabo tenetur at consequatur a ex eum hic nihil.";

  useEffect(() => {
    fetch("https://dummyjson.com/comments?limit=10")
      .then((res) => res.json())
      .then((allcomments) => {
        console.log(allcomments);
        setComments(allcomments.comments);
      });
  }, []);

  return { comments, about };
};

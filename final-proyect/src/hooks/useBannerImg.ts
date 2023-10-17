import { useEffect, useState } from "react";

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

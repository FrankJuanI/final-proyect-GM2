import { useEffect, useState } from "react";

export function useGetProductDetail(id: number) {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((productDetail) => productDetail.json())
      .then((productDetail) => {
        setProductDetail(productDetail);
      });
  }, [id]);
  return { productDetail };
}

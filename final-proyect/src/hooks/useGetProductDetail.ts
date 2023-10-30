// import { useEffect, useState } from "react";

export async function useGetProductDetail(id: number) {
  // const [productDetail, setProductDetail] = useState();
  // useEffect(() => {
  await fetch(`https://dummyjson.com/products/${id}`)
    .then((productDetail) => productDetail.json())
    .then((productDetail) => {
      return productDetail;
    });
  // }, []);

  // return productDetail;
}

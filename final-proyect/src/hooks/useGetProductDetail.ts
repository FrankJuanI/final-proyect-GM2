import { useEffect, useState } from "react"



export function useGetProductDetail(id : number){
    const [productDetail, setProductDetail] = useState()
    useEffect(() =>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then((res) => {
            setProductDetail(res)
        });

    },[])


    return productDetail
}
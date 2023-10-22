import { useNavigate } from "react-router-dom"


export function WishProduct ({product}){

    const navigate = useNavigate()

    return (
        <li onClick={()=> navigate(`/product-detail/${product.id}`)} className="wish-product">
            <img src={product.images[0]} alt="" />
            <p>{product.title}</p>
            <button><img src="/close2.png" alt="" /></button>
        </li>
    )
}
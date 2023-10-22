import { useNavigate } from "react-router-dom"


export function WishProduct ({product}){

    const navigate = useNavigate()

    return (
        <li onClick={()=> navigate(`/product-detail/${product.id}`)} className="wish-product">
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <button><img src="/close2.png" alt="" /></button>
        </li>
    )
}
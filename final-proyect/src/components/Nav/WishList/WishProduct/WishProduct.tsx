import { useNavigate } from "react-router-dom"


export function WishProduct ({product}){

    const navigate = useNavigate()

    return (
        <li onClick={()=> navigate(`/product-detail/${product.id}`)}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <button>Remove</button>
        </li>
    )
}
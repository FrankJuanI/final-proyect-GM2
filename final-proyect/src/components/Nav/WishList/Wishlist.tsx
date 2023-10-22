import { useWishListContext } from "../../../context/WishListContext.tsx"
import {WishProduct} from "./WishProduct/WishProduct.tsx"
import "./Wishlist.css"


export function Wishlist (){

    const { wishlist } = useWishListContext([])

    console.log("wishlist desde wishlist: ", wishlist)

    return (
        <ul className="wishlist-ul">
            <div className="wishlist-header">
                <h3>Wishlist</h3>
            </div>
            {
             wishlist.length != 0 ? wishlist.map((product => <WishProduct product={product}/>)) : <p>Not wished products</p>
            }
        </ul>
    )
}
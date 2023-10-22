import { useWishListContext } from "../../../context/WishListContext.tsx"
import {WishProduct} from "./WishProduct/WishProduct.tsx"



export function Wishlist (){

    const { wishlist } = useWishListContext([])

    console.log(wishlist)

    return (
        <ul>
            <h3>Wishlist</h3>
            {
             wishlist &&  wishlist.map((product => <WishProduct product={product}/>))
            }
        </ul>
    )
}
import {WishProduct} from "./WishProduct/WishProduct.tsx"

    interface CartItem {
        image: string;
        id: number;
        name: string;
    }



export function Wishlist (){

    const cartString = localStorage.getItem("cart");
    let cart: CartItem[] = [];

    if (cartString) {
        try {
            cart = JSON.parse(cartString);
        } catch (error) {
            console.error("Error al analizar los datos del carrito desde JSON:", error);
        }
    }


    return (
        <ul>
            <h3>Wishlist</h3>
            {
              cart.map((product => <WishProduct product={product}/>))
            }
        </ul>
    )
}
import { createContext, useCallback, useContext, useEffect, useState } from "react";
export const WishListContext = createContext([]);
export const useWishListContext = () => useContext(WishListContext);

interface WishlistItem {
    image: string;
    id: number;
    name: string;
}


export const WishListContextProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

    useEffect(() => {
        console.log("ASDasasas")
        const wishlistData = localStorage.getItem("wishlist");
        if (wishlistData) {
            setWishlist(JSON.parse(wishlistData));
        }
    }, []);


    const addToWishlist = useCallback((productDetail) => {
        const newWishlist = [
            ...wishlist,
            {
                image: productDetail.images[0],
                id: productDetail.id,
                name: productDetail.title,
            },
        ];
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        setWishlist(newWishlist);
    }, []);

    return (
        <WishListContext.Provider value={{ addToWishlist, wishlist }}>
            {children}
        </WishListContext.Provider>
    );
};

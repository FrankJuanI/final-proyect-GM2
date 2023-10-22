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
        const wishlistData = localStorage.getItem("wishlist");
        if (wishlistData) {
            setWishlist(JSON.parse(wishlistData));
        }
    }, []);

    const addToWishlist = useCallback((productDetail) => {
        wishlist.push(productDetail)
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
        setWishlist(wishlist)
    }, []);

    return (
        <WishListContext.Provider value={{ addToWishlist, wishlist }}>
            {children}
        </WishListContext.Provider>
    );
};

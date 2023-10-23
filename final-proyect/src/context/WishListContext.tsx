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
        const updatedWishlist = [...wishlist, productDetail];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    }, [wishlist]);

    const deleteFromWishlist = (productDetail) => {
        const updatedWishlist = wishlist.filter(item => item.id !== productDetail.id);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
    };
    
    

    return (
        <WishListContext.Provider value={{ addToWishlist, wishlist, deleteFromWishlist }}>
            {children}
        </WishListContext.Provider>
    );
};

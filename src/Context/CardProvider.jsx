import { useState } from "react";
import CardContext from "./CardContext";


const CardProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([]);

    const [wishlist, setWishlist] = useState([]);

    const [isActive, setIsActive] = useState({
        cart: true,
        status: "cart"
        })





    const addToCart = (item) => {

        if(!cartItem.find((cart) => cart.product_id === item.product_id)) {
            setCartItem([...cartItem, item]);
        }

    };

    const removeFromCart = (id) => {

        setCartItem(cartItem.filter((item) => item.product_id !== id));
    }


    const addToWishlist = (product) => {

        if(!wishlist.find((item) => item.product_id === product.product_id)) {
            setWishlist([...wishlist, product]);
        }
    }


    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.product_id !== id));
    }


    const handleIsActive = (status) => {
        if(status == "cart") {
            setIsActive({
                cart: true,
                status: "cart"
            })
        } else{
            setIsActive({
                cart: false,
                status: "wishlist"
            })
        }
    }




    const cardInfo = {
        addToCart,
        cartItem,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isActive,
        handleIsActive
    }

    return (
        <CardContext.Provider value={cardInfo}>
            {children}
        </CardContext.Provider>
    );
};

export default CardProvider;
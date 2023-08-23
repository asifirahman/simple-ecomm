import { createContext, useState } from "react";
import { ProductList } from "./productList";

export const CartContext = createContext(null)

//everytime you add a new product this default value
//will get updated
const getDefaultCartValue = () => {
    let cart = {}
    for(let i=1;i<=ProductList.length;i++) {
        cart[i] = 0
    }
    return cart;
}

export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCartValue())
    console.log("Cartitems:", cartItems)

    const addToCart = (id) => {
        setCartItems((prev) => ({...prev, [id]:prev[id]+1}))
    }

    const deleteFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]:prev[id]-1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const contextValue = {
        cartItems,
        setCartItems,
        addToCart,
        deleteFromCart,
        updateCartItemCount
    }

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    )
}
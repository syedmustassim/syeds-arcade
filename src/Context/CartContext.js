import { createContext, useEffect, useReducer, useState, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { cartReducer, initialCartState } from "../Reducer/cartReducer";
import { addToCartService, getCartService, removeFromCartService, updateQuantityService } from "../Services/CartServices";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const {token} = useAuthContext();
    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
    const [loading, setLoading] = useState(false);

    const getCart = async () => {
        setLoading(true);
        try{
            const response = await getCartService(token);
            const {status, data:{cart}} = response; 
            if(status === 200){
                cartDispatch({type: "DISPLAY_CART", payload: cart})
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    const addToCart = async (product) => {
        setLoading(true);
        try{
            const response = await addToCartService(product, token);
            const {status, data:{cart}} = response;
            if(status === 201){
                cartDispatch({type: "ADD_TO_CART", payload: cart})
            }
               
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    const removeFromCart = async({_id: productId}) => {
        try{
            const response = await removeFromCartService(productId, token)
            const {status, data:{cart}} = response;
            if(status === 200){
                cartDispatch({type: "REMOVE_FROM_CART", payload: cart})
            }
        }catch(error){
            console.log(error)
        }
    } 

    const findItemInCart = (productId) => cartState?.cart?.find((item) => item._id === productId) 

    const quantityInCart = (product) => product.qty === 0;

    const clearCart = () => {
        cartState.cart.forEach((product) => removeFromCart(product));
    }

    const updateCartQuantity = async({_id : productId,title}, actionType) => {
        try{
            const response = await updateQuantityService(productId, actionType,token)
            const {status, data:{cart}} = response; 

            if(status === 200){
                cartDispatch({type: "UPDATE_CART_QUANTITY", payload: cart})
            }
        }catch(error){
            console.log(error)
        }
    }

    const totalPrice = cartState?.cart?.reduce((acc,curr) => acc + curr.price * curr.qty,0)

    useEffect(() => {if(token){
        getCart()
    }},[token])

    return <CartContext.Provider value={{cartState, cartDispatch, loading, addToCart, findItemInCart, removeFromCart, updateCartQuantity, quantityInCart, clearCart, totalPrice}}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
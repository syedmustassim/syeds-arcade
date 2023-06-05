export const initialWishlistState = {
    wishlist: []
}

const wishlistReducer = (state,action) => {
    switch(action.type){

        case "DISPLAY_WISHLIST":
            return {...state, wishlist: action.payload}

        case "ADD_TO_WISHLIST": 
            const uniqueWishlist = action.payload.reduce((acc,curr) => (acc.includes(curr) ? acc : [...acc,curr]), [])
            return {...state, wishlist: [...uniqueWishlist]}

        case "REMOVE_FROM_WISHLIST":
            return {...state, wishlist: action.payload}

        default: 
            return state;
    }
}

export default wishlistReducer;
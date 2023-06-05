export const initialCartState = {
    cart: [],
}

export const cartReducer = (state, action) => {
    switch(action.type){

        case "DISPLAY_CART":
            return {...state, cart: action.paylaod}

        case "ADD_TO_CART":
            return {...state, cart: action.payload}

        case "REMOVE_FROM_CART":
            return {...state, cart: action.payload}

        default: 
            return state;
    }
}
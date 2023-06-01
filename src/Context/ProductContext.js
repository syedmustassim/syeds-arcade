import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

import productReducer from "../Reducer/productReducer";

export const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false, 
    products: [],
    featuredProducts: [],
    singleProduct: {},
    isSingleLoading: false,
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    const getData = async() => {

        dispatch({type: "SET_LOADING"})

        try {
            const response = await axios.get('/api/products')
            const products = await response.data.products;
            dispatch({type: "SET_API_DATA", payload: products})
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
    }

    // 2nd API call to get single Product data 

    const getSingleProduct = async() => {
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const response = await axios.get('/api/products/productId')
            const singleProduct = await response.data.products;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct})
        } catch (error) {
            dispatch({type: "SINGLE_ERROR"})
        }
    }

    useEffect(() => {getData()},[])
    return(
        <div>
            <AppContext.Provider value={{...state, getSingleProduct}}>
                {children}
            </AppContext.Provider>
        </div>
    )
}

export const useProductContext = () => useContext(AppContext);

export default AppProvider;
import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import filterReducer from "../Reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filterProducts: [],
    allProducts: [],
    sortValue: "ascending",
    rating: 0,
    filters:{
        text: "",
        category: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 349
    }
};

export const FilterContextProvider = ({children}) => {
    
    const {products} = useProductContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    //update search filter values

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name,value}})
    }

    //sorting function

    const sorting = (event) => {
        dispatch({type: "GET_SORT_VALUE", payload: event.target.value})
    }

    // sort by rating 

    const sortByRating = (value) => {
        dispatch({type: "GET_RATING", payload: value})
    }

    //clear filters 

    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() => {dispatch({type: 'FILTER_PRODUCTS'})},[products, state.filters]);

    useEffect(() => {dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products})},[products])

    useEffect(() => {dispatch({type: 'SORT_PRODUCTS', payload: products})}, [products,state.sortValue])

    useEffect(() => {dispatch({type: 'SORT_BY_RATING', payload: products})}, [products, state.rating])

    return <FilterContext.Provider value={{...state, updateFilterValue, sorting, sortByRating, clearFilters}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => useContext(FilterContext);
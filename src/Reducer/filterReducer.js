const filterReducer = (state,action) => {
    switch(action.type){

        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((item) => item.price)
            let maxPrice = Math.max(...priceArr);

            return{
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice}
            }

        case "UPDATE_FILTER_VALUE": 
            const {name, value} = action.payload;
            
            return{
                ...state,
                filters:{
                    ...state.filters,[name]: value
                }
            }

        case "GET_SORT_VALUE":
            return{
                ...state,
                sortValue: action.payload
            }

        case "SORT_PRODUCTS":
            const {filterProducts} = state;
            let tempSortData = [...filterProducts];

            state.sortValue === "ascending" ? 
                tempSortData = tempSortData.slice().sort((a,b) => a.price - b.price):
                tempSortData = tempSortData.slice().sort((a,b) => b.price - a.price)
            
            return{
                ...state,
                filterProducts: tempSortData
            }

        case "GET_RATING": 
            return{
                ...state,
                rating: action.payload
            }

        case "SORT_BY_RATING":
            let ratingData = [...state.filterProducts];
            ratingData = ratingData.filter((item) => item.rating > state.rating)
            console.log(ratingData)
            return{
                ...state,
                filterProducts: ratingData
            }

        case "FILTER_PRODUCTS": 
            let {allProducts} = state;
            let tempFilterProduct = [...allProducts];


            const {text, category, price, rating} = state.filters;
            console.log(rating)

            if(text){
                tempFilterProduct = tempFilterProduct.filter((item) => {
                    return item.title.toLowerCase().includes(text);
                })
            }

            if(category !== 'All'){
                tempFilterProduct = tempFilterProduct.filter((item) => { return item.categoryName === category})
            }

            if(price === 0){
                tempFilterProduct = tempFilterProduct.filter((item) => {return item.price <= price})
            }else{
                tempFilterProduct = tempFilterProduct.filter((item) => {return item.price <= price})
            }

            // if(rating){
            //     tempFilterProduct = tempFilterProduct.filter((item) => item.rating > rating)
            // }

            return{
                ...state,
                filterProducts: tempFilterProduct
            }

        case "CLEAR_FILTERS":
            console.log("clieked")
            return{
                    ...state, 
                    filters:{
                            ...state.filters,
                            text: "",
                            category: "All",
                            maxPrice: 3999,
                            price: state.filters.maxPrice,
                            minPrice: 349
                        } 
                    }

        default: 
            return state;
    }
}

export default filterReducer;
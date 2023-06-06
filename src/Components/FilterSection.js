import { useFilterContext } from "../Context/FilterContext";
import "./FilterSection.css"

const FilterSection = () => {

    const {filters:{text, category, price, maxPrice, minPrice}, allProducts, updateFilterValue, sorting, sortByRating, clearFilters} = useFilterContext();

    //Function to get category data
    const getDataUnique = (data,propertyName) => {
        let uniqueData = data.map((item) => { return item[propertyName]})
        return uniqueData = ["All",...new Set(uniqueData)]
    }

    // Need category or unique data here
    const categoryData = getDataUnique(allProducts, "categoryName");

    //rating array 
    const ratingValues = [4.5,4,3.5,3];

    return(
        <div className="main-wrapper">
            <h1> Filters</h1>
            <div className="filter-search">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder="Search"/>
                </form>
            </div>

            <div className="filter-category">
                <h3>Categories</h3>
                <div>
                    {
                        categoryData.map((item,index) => {
                            // return <label>
                            //     <input type="checkbox" name="category" onChange={(event) => updateFilterValue(event)}/>
                            //     {item}
                            // </label>
                            return <button key={index} type="button" name="category" value={item} onClick={updateFilterValue}>{item}</button>
                        })
                    }
                </div>
            </div>

            <div className="filter-price"> 
                <h3>Price Range</h3>
                <h4>{price}</h4>
                <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
            </div>

            <div className="filter-three">
                <h3>Sort</h3>
                <label><input type="radio" name="price" value="ascending" onChange={sorting}/>Low to High</label>
                <label style={{padding: "10px"}}><input type="radio" name="price" value="descending" onChange={sorting}/>High to Low</label>
            </div>

            <div className="filter-rating-checkbox">
                <h3>Rating</h3>
                {
                    ratingValues.map((item) => {
                        return(
                            <label>
                                <input type="checkbox" value={item} onChange={(event) => sortByRating(event.target.value)}/>
                                {item}+
                            </label>
                        )
                    })
                }       
            </div>
            <button className="clear-filter-btn" onClick={() => clearFilters()}> Clear Filters </button>
        </div>
    )
}


export default FilterSection;
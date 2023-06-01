import { useFilterContext } from "../Context/FilterContext";
import "./FilterSection.css"
import styled from "../Styles/GlobalStyles"

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

// const Wrapper = styled.section`
//   padding: 5rem 0;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;

//   h3 {
//     padding: 2rem 0;
//     font-size: bold;
//   }

//   .filter-search {
//     input {
//       padding: 0.6rem 1rem;
//       width: 80%;
//     }
//   }

//   .filter-category {
//     div {
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       gap: 1.4rem;

//       button {
//         border: none;
//         background-color: ${({ theme }) => theme.colors.white};
//         text-transform: capitalize;
//         cursor: pointer;

//         &:hover {
//           color: ${({ theme }) => theme.colors.btn};
//         }
//       }

//       .active {
//         border-bottom: 1px solid #000;
//         color: ${({ theme }) => theme.colors.btn};
//       }
//     }
//   }

//   .filter-company--select {
//     padding: 0.3rem 1.2rem;
//     font-size: 1.6rem;
//     color: ${({ theme }) => theme.colors.text};
//     text-transform: capitalize;
//   }

//   .filter-color-style {
//     display: flex;
//     justify-content: center;
//   }

//   .color-all--style {
//     background-color: transparent;
//     text-transform: capitalize;
//     border: none;
//     cursor: pointer;
//   }
//   .btnStyle {
//     width: 2rem;
//     height: 2rem;
//     background-color: #000;
//     border-radius: 50%;
//     margin-left: 1rem;
//     border: none;
//     outline: none;
//     opacity: 0.5;
//     cursor: pointer;

//     &:hover {
//       opacity: 1;
//     }
//   }

//   .active {
//     opacity: 1;
//   }

//   .checkStyle {
//     font-size: 1rem;
//     color: #fff;
//   }

//   .filter_price {
//     input {
//       margin: 0.5rem 0 1rem 0;
//       padding: 0;
//       box-shadow: none;
//       cursor: pointer;
//     }
//   }

//   .filter-shipping {
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//   }

//   .filter-clear .btn {
//     background-color: #ec7063;
//     color: #000;
//   }
// `;


export default FilterSection;
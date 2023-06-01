import { NavLink, useNavigate } from "react-router-dom";
import { useFilterContext } from "../Context/FilterContext";
import './ProductList.css'

const ProductList = () =>{

    const {filterProducts} = useFilterContext();
    
    // const navigate = useNavigate()
    // const goTo = () =>{
    //     navigate("/cart")
    // }

    return(
        <div className="flex-container">
            {/* <h3> Games available: {filterProducts.length} </h3> */}
            {   filterProducts.length === 0 ? <div> <h1> No products found </h1> </div> :
                filterProducts.map((item) => {
                    const {id,image_link,title,price,year,rating,categoryName} = item;
                    return(
                        <div className="layout" key={id}>
                            <div className="card">
                                <img src={image_link} alt={title} className="card-img"/>
                            <div className="card-body">
                             
                                <NavLink to={`/products/${id}`} className="card-body-link" style={{color: "white"}}>
                                <h1 className="card-heading">{title}</h1>
                                <h2 className="card-sub-heading">Price: INR {price}</h2>
                                <h2 className="card-info">Year: {year}</h2>
                                <h2 className="card-info">Rating: {rating}</h2>
                                <h2 className="card-info">Genre: {categoryName}</h2>
                                </NavLink>
                                
                                <div className="btn-container">
                                    <button className="btn-card"> Add to Cart</button>
                                    <button className="btn-card"> Add to Wishlist</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;
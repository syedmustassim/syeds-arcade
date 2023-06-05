import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import ProductList from "../Components/ProductList"
import Sort from "../Components/Sort"
import FilterSection from "../Components/FilterSection"
import './Discover.css'
import { useFilterContext } from "../Context/FilterContext"


export const Discover = () => {

    return(
        <div>
            <Navbar/>
            <div className="discover-body">
                <h1 className="discover-heading"> Discover our best games here</h1>
            <div className="container grid grid-filter-column">
                <div className="filter">
                    <FilterSection/>
                </div>

                <section className="product-view--sort">
                    {/* <div className="sort-filter">
                        <Sort/>

                    </div> */}
                    <div className="main-product">
                        <ProductList/>

                    </div>    
                </section>

            </div>

            </div>
          
            <Footer/>
        </div>
    )
}
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { useProductContext } from "../Context/ProductContext"
import ProductList from "../Components/ProductList"

import './FeaturedPages.css'

export const FPS = () => {

    const {products} = useProductContext();
    const fpsGames = products?.filter((item) => item.categoryName === 'FPS')
    return(
        <div>
            <Navbar/>
            <div className="featured-container">
                <div>
                <div className="featured-container-heading">
                    <h1 style={{color: "rgb(42, 189, 222)"}}>FPS</h1>
                    <h2 style={{color: "rgb(42, 189, 222)"}}>FPS are first person shooter games. Centered on a gun and other weapon-based combat in a first-person perspective, with the player experiencing the action through the eyes of the protagonist who is armed in a three-dimensional space.  </h2>
                </div>
                </div>
            
                <ProductList filterProducts={fpsGames}/>
            </div>
            <Footer/>
        </div>
    )
}
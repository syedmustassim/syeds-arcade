import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { useProductContext } from "../Context/ProductContext"
import ProductList from '../Components/ProductList'
import './FeaturedPages.css'

export const RPG = () => {

    const {products} = useProductContext();
    const rpgGames = products?.filter((item) => item.categoryName === 'RPG')
    return(
        <div>
            <Navbar/>
            <div className="featured-container">
                <div>
                <div className="featured-container-heading">
                    <h1 style={{color: "rgb(113, 80, 204)"}}>RPG</h1>
                    <h2 style={{color: "rgb(113, 80, 204)"}}>RPGs are role playing games. These are games where YOU assume the role of a character that you can customize as you take on a ficitional setting. Your decisions, lead to multiple outcomes and different story narratives. </h2>
                </div>
                </div>
            
                <ProductList filterProducts={rpgGames}/>
            </div>
            <Footer/>
        </div>
    )
}
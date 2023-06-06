import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import ProductList from "../Components/ProductList"
import {useProductContext} from "../Context/ProductContext"
import './FeaturedPages.css'

export const Action = () => {

    const {products} = useProductContext();
    const actionGames = products?.filter((item) => item.categoryName === 'action')


    return(
        <div>
            <Navbar/>
            <div className="featured-container">
                <div>
                <div className="featured-container-heading">
                    <h1>Action Games</h1>
                    <h2>Immerse yourself into the best action games that are on the market. These are games of genre that emphasize physical challenges, including hand-eye coordination and reaction times. We have included only the games that offer good narratives.</h2>
                </div>
                </div>
            
                <ProductList filterProducts={actionGames}/>
            </div>
            <Footer/>
        </div>
    )
}
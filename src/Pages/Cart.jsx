import CartCard from "../Components/CartCard"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { useCart } from "../Context/CartContext"

import { Link } from "react-router-dom"

import './Cart.css'
import CartPrice from "../Components/CartPrice"

export const Cart = () => {

    const {cartState: {cart}, loading} = useCart();
    const gameIcon = require('../Images/one-more-game.png')
    return(
        <div>
            <Navbar/>
            <div className="cart-container">
                <div className="cart-heading">
                    <h1> My Cart - {cart?.length}</h1>
                    {
                        cart?.length > 0 ? (
                            <div>
                                <div> 
                                    {
                                        cart?.map((product) => (<CartCard key={product._id} cartProduct={product} />))
                                    }
                                </div>
                            </div>
                        ) : (<div className="cart-no-items">
                                <h1> No items in Cart! </h1>
                                <img src={gameIcon} alt="poster"className="cart-no-items-img"/>
                                <div><Link to="/discover"> <button className="cart-browse-btn"> Discover games here </button></Link></div>
                            </div>)
                    }
                </div>
                <div className="cart-second-container">
                    <CartPrice/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
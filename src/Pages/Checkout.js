import { Address } from "../Components/Address"
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { OrderDetails } from "../Components/OrderDetails"
import { useCart } from "../Context/CartContext"
import './Checkout.css'

export const Checkout = () => {

    const {cartState: {cart}} = useCart()
    console.log(cart);
    return(
        <div>
            <Navbar/>
            <div className="checkout-main">
                <div className="checkout-heading">
                    <h1> Checkout Page </h1>
                    <h1>User Details</h1>
                    <Address/>
                </div>
                <div className="checkout-second-container">
                    <OrderDetails/>
                </div>
            </div>
            
            <Footer/>
            
        </div>
    )
}
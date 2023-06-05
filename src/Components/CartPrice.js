import { useCart } from "../Context/CartContext"
import '../Pages/Cart.css'

const CartPrice = () => {
    const {cartState: {cart}, totalPrice} = useCart();

    return(
        <div className="cart-price-container">
            <div className="cart-price-heading">
                <h1>Price Details</h1>
            </div>
            <hr/>
            <div className="cart-price-h3">
                <h3>Price: &#8377; {totalPrice}</h3>
            </div>
            <hr/>
            <div className="cart-price-content">
            <h3>Shipping and delivery charges: Nil. It is on the house.</h3>
            <h2>Total amount: &#8377; {totalPrice}</h2>
            </div>
            <button> Proceed to Checkout </button>
        </div>
    )
}

export default CartPrice;
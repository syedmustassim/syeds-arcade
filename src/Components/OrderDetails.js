import { useCart } from "../Context/CartContext"

export const OrderDetails = () => {

    const {cartState: {cart}, totalPrice} = useCart();

    return(
        <div className="order-details-container">
            <div className="order-details-heading">
                <h1>Order Details</h1>
            </div>
            <hr/>
            <div className="order-details-h3">
                <h3>Games:</h3>
                {
                    cart?.map((item) => {
                        const {title, qty} = item;
                        return(
                            <ul>
                                <li className="order-details-list">{title} - Quantity: {qty}</li>
                            </ul>
                        )
                    })
                }
            </div>
            <hr/>
            <div className="order-price-content">
            <h1>Price Details</h1>
            {
                cart?.map((item) => {
                    const {title, price} = item;
                    return(<p>{title} - &#8377;{price}</p>)
                })
            }
            <h2>Shipping and delivery charges: Nil. On the house.</h2>
            <h2>Total amount: &#8377; {totalPrice}</h2>
            </div>
            <button> Place Order </button>
        </div>
    )
}
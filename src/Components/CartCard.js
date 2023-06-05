import { useCart } from "../Context/CartContext";

import '../Pages/Cart.css'

const CartCard = ({cartProduct}) => {
    // console.log(cartProduct, "cartCard in here")

    // console.log(cartProduct._id)

    const {_id, title, price, image_link} = cartProduct;
    // console.log(title)

    const {removeFromCart} = useCart();

    return(
        <div>   
            <div className="cart-card">
                <img src={image_link} alt="poster" />
                <div className="card-details">
                    <h3 className="cart-title">{title}</h3>
                    <h3>Price: INR {price}</h3>
                    <div className="cart-card-btn">
                        <button className="cart-remove-btn" onClick={() => removeFromCart(cartProduct)}>Remove from cart</button>
                        <button className="cart-wishlist-btn">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;
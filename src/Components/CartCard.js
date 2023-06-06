import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

import '../Pages/Cart.css'

const CartCard = ({cartProduct}) => {

    const {_id, title, price, qty, image_link} = cartProduct;
    const {removeFromCart, updateCartQuantity} = useCart();
    const {addToWishlist} = useWishlist();

    return(
        <div>   
            <div className="cart-card">
                <img src={image_link} alt="poster" />
                <div className="card-details">
                    <h3 className="cart-title">{title}</h3>
                    <h3>Price: INR {price}</h3>
                    <div>
                    <button className="quantity-minus" onClick={() => updateCartQuantity(cartProduct, "decrement")} disabled={qty <=1 }>-</button>Quantity: {qty}<button className="quantity-plus" onClick={() => updateCartQuantity(cartProduct, "increment")}>+</button>
                    </div>
                    <div className="cart-card-btn">
                        <button className="cart-remove-btn" onClick={() => removeFromCart(cartProduct)}>Remove from cart</button>
                        <button className="cart-wishlist-btn" onClick={() => addToWishlist(cartProduct)}>Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard;
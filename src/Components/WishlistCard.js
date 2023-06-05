import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

import '../Pages/Wishlist.css'

const WishlistCard = ({wishlistProduct}) => {

    const {_id, title, price, image_link, description_one} = wishlistProduct;
    const {addToCart} = useCart();
    const {removeFromWishlist} = useWishlist();

    return(
        <div>   
            <div className="wishlist-card">
                <img src={image_link} alt="poster" />
                <div className="wishlist-details">
                    <h3 className="wishlist-title">{title}</h3>
                    <h3>Price: INR {price}</h3>
                    <p> <bold>Description:</bold> {description_one}</p>
                    <div className="wishlist-card-btn">
                        <button className="wishlist-remove-btn" onClick={() => removeFromWishlist(wishlistProduct)}>Remove from Wishlist</button>
                        <button className="wishlist-cart-btn" onClick={() => addToCart(wishlistProduct)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistCard;
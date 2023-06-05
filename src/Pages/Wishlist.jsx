import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import WishlistCard from "../Components/WishlistCard";
import { useWishlist } from "../Context/WishlistContext"

export const Wishlist = () => {

    const {wishlistState: {wishlist}, loading} = useWishlist();
    console.log(wishlist);
    const logoIcon = require('../Images/syed-arcade.png')

    return(
        <div>
            <Navbar/>
            <div className="wishlist-container">
                <h1 className="wishlist-heading"> My Wishlist : {wishlist?.length}</h1>
                {
                    wishlist?.length > 0 ? (
                        <div>
                            <div>
                                {
                                    wishlist?.map((product ) => (<WishlistCard key={wishlist._id} wishlistProduct={product
                                    }/>))
                                }
                            </div>
                        </div>
                    ) : (<div className="wishlist-no-items">
                        <h1>No items in Wishlist! </h1>
                        <img src={logoIcon} alt="logo" />
                        <div><Link to="/discover"><button className="wishlist-browse-btn">Discover games here</button></Link></div>
                    </div>)
                }
            </div>
            <Footer/>
        </div>
    )
}
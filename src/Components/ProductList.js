import { NavLink, useNavigate } from "react-router-dom";
import { useFilterContext } from "../Context/FilterContext";
import "./ProductList.css";
import { useAuthContext } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

const ProductList = ({ filterProducts }) => {
  const navigate = useNavigate();

  const { token } = useAuthContext();
  const { addToCart, findItemInCart } = useCart();
  const { addToWishlist, itemInWishlist } = useWishlist();

  return (
    <div className="flex-container">
      {filterProducts.length === 0 ? (
        <div>
          {" "}
          <h1> No products found </h1>{" "}
        </div>
      ) : (
        filterProducts.map((item) => {
          const { id, image_link, title, price, year, rating, categoryName } =
            item;
          return (
            <div className="layout" key={id}>
              <div className="card">
                <img src={image_link} alt={title} className="card-img" />
                <div className="card-body">
                  <NavLink
                    to={`/products/${id}`}
                    className="card-body-link"
                    style={{ color: "white" }}
                  >
                    <h1 className="card-heading">{title}</h1>
                    <h2 className="card-sub-heading">Price: &#8377; {price}</h2>
                    <h2 className="card-info">Year: {year}</h2>
                    <h2 className="card-info">Rating: {rating}</h2>
                    <h2 className="card-info">Genre: {categoryName}</h2>
                  </NavLink>

                  <div className="btn-container">
                    <button
                      className="btn-card"
                      onClick={() =>
                        token
                          ? findItemInCart(item._id)
                            ? navigate("/cart")
                            : addToCart(item)
                          : navigate("/login")
                      }
                    >
                      {" "}
                      {token && findItemInCart(item._id)
                        ? "Go to cart"
                        : "Add to Cart"}
                    </button>
                    <button
                      className="btn-card"
                      onClick={() =>
                        token
                          ? itemInWishlist(item._id)
                            ? navigate("/wishlist")
                            : addToWishlist(item)
                          : navigate("/login")
                      }
                    >
                      {token && itemInWishlist(item._id)
                        ? "Go to Wishlist"
                        : "Add to Wishlist"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ProductList;

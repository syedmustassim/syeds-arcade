import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import "./ProductDetail.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { useAuthContext } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { products } = useProductContext();
  const { token } = useAuthContext();
  const { addToCart, findItemInCart } = useCart();
  const { addToWishlist, itemInWishlist } = useWishlist();

  const selectedProduct = products.find((item) => item.id === productId);

  return (
    <div>
      <Navbar />
      <div className="product-detail">
        <div className="product-detail-main-container">
          <h1> {selectedProduct.title} </h1>
          <div className="product-detail-content-container">
            <h2>Rating: {selectedProduct.rating} </h2>
            <h3> {selectedProduct.recommendation}</h3>
          </div>

          <div className="product-detail-carousel">
            <Swiper
              spaceBetween={100}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={selectedProduct.carousel_img_1} alt="" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.carousel_img_2} alt="" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.carousel_img_3} alt="" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.carousel_img_4} alt="" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={selectedProduct.carousel_img_5} alt="" width="100%" />
              </SwiperSlide>
            </Swiper>
          </div>
          <p>{selectedProduct.description_one}</p>
          <br />
          <h4>Genre: {selectedProduct.categoryName}</h4>
          <h2>About the Game</h2>
          <br />
          {selectedProduct.about_game.map((item) => (
            <div>
              <h4>{item.title}</h4>
              <p> {item.desc}</p>
            </div>
          ))}
        </div>

        <div className="product-detail-secondary-container">
          <img src={selectedProduct.image_link} alt="" width="250px" />
          <h3>Price: &#8377; {selectedProduct.price}</h3>
          <button
            className="product-detail-cart-btn"
            onClick={() =>
              token
                ? findItemInCart(selectedProduct._id)
                  ? navigate("/cart")
                  : addToCart(selectedProduct)
                : navigate("/login")
            }
          >
            {token && findItemInCart(selectedProduct._id)
              ? "Go to Cart"
              : "Add to Cart"}
          </button>
          <button
            className="product-detail-wishlist-btn"
            onClick={() =>
              token
                ? itemInWishlist(selectedProduct._id)
                  ? navigate("/wishlist")
                  : addToWishlist(selectedProduct)
                : navigate("/login")
            }
          >
            {token && itemInWishlist(selectedProduct._id)
              ? "Go to Wishlist"
              : "Add to Wishlist"}
          </button>
          <h3>Publisher: {selectedProduct.publisher}</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;

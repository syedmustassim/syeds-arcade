import {
  createContext,
  useReducer,
  useState,
  useEffect,
  useContext,
} from "react";
import { useAuthContext } from "./AuthContext";
import wishlistReducer, {
  initialWishlistState,
} from "../Reducer/wishlistReducer";
import {
  addToWishlistService,
  getWishlistService,
  removeFromWishlistService,
} from "../Services/WishlistServices";
import { toast } from "react-hot-toast";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const { token } = useAuthContext();
  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialWishlistState
  );
  const [loading, setLoading] = useState(false);

  const getWishlist = async () => {
    setLoading(true);
    try {
      const response = await getWishlistService(token);
      const {
        status,
        data: { wishlist },
      } = response;

      if (status === 200) {
        wishlistDispatch({ type: "DISPLAY_WISHLIST", payload: wishlist });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const response = await addToWishlistService(product, token);
      const {
        status,
        data: { wishlist },
      } = response;

      if (status === 201) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
        toast.success(`${product.title} added to wishlist!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishlist = async ({ _id: productId, title }) => {
    try {
      const response = await removeFromWishlistService(productId, token);
      const {
        status,
        data: { wishlist },
      } = response;

      if (status === 200) {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist });
        toast.success(`${title} removed from wishlist!`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const itemInWishlist = (productId) =>
    wishlistState.wishlist?.find((product) => product._id === productId);

  useEffect(() => {
    if (token) {
      getWishlist();
    }
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        loading,
        addToWishlist,
        removeFromWishlist,
        itemInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

export default WishlistProvider;

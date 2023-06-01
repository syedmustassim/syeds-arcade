import "./App.css";
import {Routes, Route} from "react-router-dom"
import MockAPI from "./Mockman";
import RequiresAuth from "./Components/RequiresAuth"
import { Home } from "./Pages/Home";
import { Discover } from "./Pages/Discover";
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";


function App() {
  return (
    <div className="App">

     <Routes>
      <Route path="/mockApi" element={<MockAPI/>}></Route>
      <Route path="/discover" element={<Discover />}></Route>
      <Route path="/cart" element={<RequiresAuth><Cart/></RequiresAuth>}></Route>
      <Route path="/wishlist" element={<RequiresAuth><Wishlist/></RequiresAuth>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products/:productId" element={<ProductDetail />}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>

    </div>
  );
}

export default App;

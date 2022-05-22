import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Home from "./home";
import Wishlist from "./Wishlist";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">home</Link>
        <Link to="/cart">cart</Link>
        <Link to="/wishList">wishList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Cart from "./Cart";
import Home from "./home";
import Wishlist from "./Wishlist";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import cartImg from "../image/cart.png";
import wishlistImg from "../image/wishlist.png";
import userImg from "../image/avatar-human-person-svgrepo-com.svg";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav>
      <ul className="nav-container">
        <li className="logo-container">
          <Link to="/" className="Link img-container logo-container">
            <img className="logo nav-img" src={logo} alt="logo" />
            <span>FireShop</span>
          </Link>
        </li>

        <li>
          <Link className="Link img-container" to="/wishList">
            <img className="nav-img" src={wishlistImg} alt="WishList" />
          </Link>
        </li>
        <li>
          <Link className="Link img-container" to="/cart">
            <img className="nav-img" src={cartImg} alt="Cart" />
          </Link>
        </li>
        <li>
          <Link className="Link img-container" to="/login">
            <img src={userImg} alt="userdetails" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

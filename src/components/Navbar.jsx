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
        <li>
          <Link to="/" className="Link img-container logo-container">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link className="Link" to="/">
            Home
          </Link>
        </li>
        <li>
          <input type="search" placeholder="search"></input>
        </li>
        <li>
          <Link className="Link img-container" to="/wishList">
            <img src={wishlistImg} alt="" />
          </Link>
        </li>
        <li>
          <Link className="Link img-container" to="/cart">
            <img src={cartImg} alt="" srcset="" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <img src={userImg} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import React from "react";

// components
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

// styles
import {
  wrapperStyle,
  cartLogoStyle,
  userLogoStyle,
  homeLogoStyle,
} from "./style";

// images
import shoppingCartLogo from "../../assets/images/shopping-cart.png";
import userLogo from "../../assets/images/user.png";
import home from "../../assets/images/home.png";

function Navbar({ isInShop }) {
  return (
    <div style={wrapperStyle}>
      <div className="nav-title">Zero rottens</div>
      {isInShop ? (
        <div style={{ color: "#315343", fontSize: 24 }} className="nav-title">
          Register to be a Zero rottens Seller
        </div>
      ) : (
        <SearchBar />
      )}
      <div>
        <Link to="/">
          <img style={homeLogoStyle} src={home} alt="home" />
        </Link>
        <Link to="shopping-cart">
          <img
            style={cartLogoStyle}
            src={shoppingCartLogo}
            alt="shopping cart logo"
          />
        </Link>
        <Link to="profile">
          <img style={userLogoStyle} src={userLogo} alt="profile logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

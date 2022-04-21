import React from "react";

// components
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

// styles
import { wrapperStyle, cartLogoStyle, userLogoStyle } from "./style";

// images
import shoppingCartLogo from "../../assets/images/shopping-cart.png";
import userLogo from "../../assets/images/user.png";

function Navbar() {
  return (
    <div style={wrapperStyle}>
      <div className="nav-title">Zero rottens</div>
      <SearchBar />
      <div>
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

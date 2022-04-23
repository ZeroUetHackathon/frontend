import React from "react";

// styles
import { searchbarWrapperStyle } from "./style";
import { searchIconStyle, inputStyle } from "../SearchBar/style";

// images
import searchLogo from "../../assets/images/search.png";

function Searchbar() {
  return (
    <div style={searchbarWrapperStyle}>
      <input
        className="searchbar-text"
        style={{ ...inputStyle, marginLeft: 0 }}
        placeholder="Search..."
      />
      <a>
        <img style={searchIconStyle} src={searchLogo} alt="search" />
      </a>
    </div>
  );
}

export default Searchbar;

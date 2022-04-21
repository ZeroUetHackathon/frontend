import React from "react";

// images
import searchLogo from "../../assets/images/search.png";

// styles
import "../../styles/font.css";
import { wrapperStyle, inputStyle, searchIconStyle } from "./style";

function SearchBar() {
  return (
    <div style={wrapperStyle}>
      <img style={searchIconStyle} src={searchLogo} alt="search icon" />
      <input
        style={inputStyle}
        className="searchbar-text"
        placeholder="Enter product name..."
      />
    </div>
  );
}

export default SearchBar;

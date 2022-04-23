import React from "react";

// components
import Searchbar from "./Searchbar";

// styles
import { sidemenuWrapperStyle } from "./style";

function SideMenu() {
  return (
    <div style={sidemenuWrapperStyle}>
      <div style={{ fontWeight: 600 }} className="footer-title">
        All product
      </div>
      <Searchbar />
    </div>
  );
}

export default SideMenu;

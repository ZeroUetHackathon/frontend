import React, { useState } from "react";

// components
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import SliderComponent from "../Slider/Slider";
import Switches from "../Switches/Switches";

// styles
import { sidemenuWrapperStyle } from "./style";

function SideMenu() {
  const [chosenValues, setChosenValues] = useState(["", ""]);
  const dropdownOptions = [
    ["Red meat", "White meat", "Vegetables"],
    ["Price", "Rating"],
  ];
  const dropdownPlaceholders = ["Category", "Sort By"];
  const buttonLabels = ["On sale", "In stock"];
  return (
    <div style={sidemenuWrapperStyle}>
      <div style={{ fontWeight: 600 }} className="footer-title">
        All product
      </div>
      <Searchbar />
      <div style={{ marginTop: 30 }}>
        {dropdownPlaceholders.map((placeholder, index) => {
          return (
            <Dropdown
              options={dropdownOptions[index]}
              key={index}
              value={chosenValues[index]}
              placeholder={placeholder}
            />
          );
        })}
      </div>
      <div style={{ marginTop: 50 }}>
        <SliderComponent />
      </div>
      <div style={{ marginTop: 30 }}>
        <Switches labels={buttonLabels} />
      </div>
    </div>
  );
}

export default SideMenu;

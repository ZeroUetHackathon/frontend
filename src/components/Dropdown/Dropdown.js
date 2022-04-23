import React, { useState, useEffect, useRef } from "react";

// styles
import { formInputStyle, dropdownWindowStyle } from "./style";

// images
import arrowDown from "../../assets/images/chevron-down.png";

function Dropdown({ options, key, value }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [chosenOption, setChosenOption] = useState(value);
  const [outerWidth, setOuterWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      console.log(width);
      setOuterWidth(width);
    }
  }, [ref]);

  const DropdownWindow = () => {
    return (
      <div style={{ ...dropdownWindowStyle, width: outerWidth }}>
        {options.map((option, index) => {
          return (
            <a
              key={index}
              className="dropdown-option-text"
              href="#"
              onClick={() => {
                setChosenOption(option);
                setOpenDropdown(false);
              }}
            >
              {option}
            </a>
          );
        })}
      </div>
    );
  };

  const handleClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <button
      index={key}
      ref={ref}
      value={chosenOption}
      className="custom-button"
      onClick={handleClick}
      style={{ ...formInputStyle, backgroundColor: "white" }}
    >
      {chosenOption ? chosenOption : "Choose from dropdown"}
      <img
        style={{
          width: 18,
          height: 18,
          transform: openDropdown && "rotate(180deg)",
        }}
        src={arrowDown}
        alt="arrow"
      />
      {openDropdown && <DropdownWindow />}
    </button>
  );
}

export default Dropdown;

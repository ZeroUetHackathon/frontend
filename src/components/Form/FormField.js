import React, { useState, useRef, useEffect } from "react";

// styles
import {
  formFieldWrapperStyle,
  formInputStyle,
  dropdownWindowStyle,
} from "./style";

// images
import plusSquare from "../../assets/images/plus-square.png";
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

function FormField({
  fieldName,
  value,
  isDropdown,
  addable,
  options,
  index,
  handleAddField,
}) {
  const [txt, setTxt] = useState(value);

  const handleChange = (event) => {
    setTxt(event.target.value);
  };

  const handleAdd = () => {
    handleAddField(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={formFieldWrapperStyle}>
        <div className="field-name">{fieldName}</div>
        {isDropdown ? (
          <Dropdown key={index} options={options} value={value} />
        ) : (
          <input
            index={index}
            onChange={handleChange}
            className="searchbar-text"
            style={formInputStyle}
            value={txt}
          />
        )}
      </div>
      {addable && (
        <a onClick={handleAdd}>
          <img
            style={{ width: 30, height: 30 }}
            src={plusSquare}
            alt="plus square"
          />
        </a>
      )}
    </div>
  );
}

export default FormField;

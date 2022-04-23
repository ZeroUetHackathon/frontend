import React from "react";

// styles
import { buttonStyle, disabledButtonStyle } from "./style";

function Button({ label, isDisabled, handleOnClick }) {
  return (
    <button
      className="login-medium-button"
      style={isDisabled ? disabledButtonStyle : buttonStyle}
      disabled={isDisabled}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
}

export default Button;

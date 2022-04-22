import React, { useState } from "react";

// components
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import LineDivider from "../../components/LineDivider/LineDivider";

// styles
import { wrapperStyle } from "./style";

function VerifyShop() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div style={wrapperStyle}>
      <StepperComponent step={activeStep} />
      <LineDivider />
    </div>
  );
}

export default VerifyShop;

import React from "react";

// components
import { Stepper, Step, StepLabel } from "@mui/material";

// styles
import { stepperStyle } from "./style";

function StepperComponent({ step }) {
  const steps = [
    "Setup store information",
    "Setup delivery",
    "Post products for sale",
  ];

  return (
    <Stepper sx={stepperStyle} activeStep={step} alternativeLabel>
      {steps.map((step) => {
        return (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}

export default StepperComponent;

import React from "react";

// components
import Button from "../Button/Button";

// styles
import { wrapperStyle } from "./style";

function StepNavigator({ setStep, currentStep, numOfSteps, handleChangeStep }) {
  const handlePrev = () => {
    handleChangeStep();
    setStep(currentStep - 1);
  };

  const handleNext = () => {
    handleChangeStep();
    setStep(currentStep + 1);
  };

  return (
    <div style={wrapperStyle}>
      <Button
        label={"Prev step"}
        isDisabled={currentStep === 0}
        handleOnClick={handlePrev}
      />
      <Button
        label={"Next step"}
        isDisabled={currentStep === numOfSteps - 1}
        handleOnClick={handleNext}
      />
    </div>
  );
}

export default StepNavigator;

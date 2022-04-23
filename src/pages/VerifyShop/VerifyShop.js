import React, { useState, createRef } from "react";

// components
import StepperComponent from "../../components/StepperComponent/StepperComponent";
import StepNavigator from "../../components/StepNavigator/StepNavigator";
import LineDivider from "../../components/LineDivider/LineDivider";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

// styles
import {
  wrapperStyle,
  successScreenStyle,
  successScreenRightStyle,
} from "./style";

// images
import registerSuccessful from "../../assets/images/register-successful.png";
import checkSquare from "../../assets/images/check-square.png";

function VerifyShop() {
  const [activeStep, setActiveStep] = useState(0);
  const [fields, setFields] = useState([
    [
      { name: "Store name", value: "", isDropdown: false },
      { name: "Address", value: "", isDropdown: false },
      { name: "Email", value: "", isDropdown: false },
      { name: "Phone number", value: "", isDropdown: false },
    ],
    [
      {
        name: "Super Fast",
        value: "",
        isDropdown: true,
        options: ["Viettel x10 speed delivery", "Ninja Lead"],
        addable: true,
      },
      {
        name: "Normal",
        value: "",
        isDropdown: true,
        options: ["Cub 50cc post", "Exciter 150 delivery"],
        addable: true,
      },
      {
        name: "COD",
        value: "",
        isDropdown: true,
        options: ["Young buffalo entertainment"],
        addable: true,
      },
    ],
  ]);

  const ref = createRef(null);

  const handleChangeStep = () => {
    const inputs = document.querySelectorAll("input, .custom-button");
    // console.log(inputs);
    let temp = [...fields];
    for (let i = 0; i < inputs.length; i++) {
      const currentValue = inputs[i].value;
      temp[activeStep][i].value = currentValue;
    }
    // console.log(temp);
    setFields(temp);

    // const form = ref.current;
    // console.log(form);
    // form.submit();
  };

  const handleAddField = (index) => {
    let temp = [...fields];
    let tempField = {
      ...temp[activeStep][index],
      value: "",
      name: "",
      addable: true,
    };
    // console.log(tempField);
    delete temp[activeStep][index].addable;
    // console.log(temp[activeStep][index].addable);
    temp[activeStep].splice(index + 1, 0, tempField);
    // if (temp[activeStep][index].addable) {
    //   delete temp[activeStep][index].addable;
    // }
    console.log(temp);
    setFields(temp);
  };

  const SuccessScreen = () => {
    return (
      <div style={successScreenStyle}>
        <img
          style={{ width: 360, height: 253 }}
          src={registerSuccessful}
          alt="register successful"
        />
        <div style={successScreenRightStyle}>
          <img
            style={{ width: 36, height: 36, marginBottom: 25 }}
            src={checkSquare}
            alt="check square"
          />
          <div
            style={{ color: "#305241", marginBottom: 25, fontWeight: 400 }}
            className="login-medium-button"
          >
            Register Successfully
          </div>
          <Button
            label="Add products"
            isDisabled={false}
            handleOnClick={() => console.log("lol")}
          />
        </div>
      </div>
    );
  };

  return (
    <div style={wrapperStyle}>
      <StepperComponent step={activeStep} />
      <LineDivider />
      {activeStep !== 2 ? (
        <Form fields={fields[activeStep]} handleAddField={handleAddField} />
      ) : (
        <SuccessScreen />
      )}
      <LineDivider />
      <StepNavigator
        setStep={setActiveStep}
        currentStep={activeStep}
        numOfSteps={3}
        handleChangeStep={handleChangeStep}
      />
    </div>
  );
}

export default VerifyShop;

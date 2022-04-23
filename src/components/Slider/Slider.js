import React from "react";

// components
import { Slider } from "@mui/material";

function valueText(value) {
  return `$${value}`;
}

function SliderComponent() {
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 100,
      label: "$100",
    },
  ];
  return (
    <Slider
      color="primary"
      aria-label="Always visible"
      defaultValue={50}
      getAriaValueText={valueText}
      step={5}
      marks={marks}
      valueLabelDisplay="on"
    />
  );
}

export default SliderComponent;

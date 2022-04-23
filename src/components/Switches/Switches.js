import React from "react";

// components
import { FormGroup, Switch } from "@mui/material";

function Switches({ labels }) {
  return (
    <FormGroup>
      {labels.map((label) => {
        return (
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ color: "black" }} className="searchbar-text">
              {label}
            </div>
            <Switch />
          </div>
        );
      })}
    </FormGroup>
  );
}

export default Switches;

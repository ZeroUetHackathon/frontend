import React from "react";

// components
import FormField from "./FormField";

function Form({ fields, handleAddField }) {
  return (
    <div style={{ width: "50%", margin: "20px 0px" }}>
      {fields.map((field, index) => {
        return (
          <FormField
            index={index}
            fieldName={field.name}
            value={field.value}
            isDropdown={field.isDropdown}
            addable={field.addable ? field.addable : false}
            options={field.options ? field.options : []}
            handleAddField={handleAddField}
          />
        );
      })}
    </div>
  );
}

export default Form;

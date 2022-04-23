import React, { useState } from "react";

// components
import Item from "./Item";

// styles
import { itemListWrapperStyle } from "./style";

function ItemList({ chosenProvince, products }) {
  return (
    <div style={itemListWrapperStyle}>
      {products.length !== 0 ? (
        products.map((product) => {
          return <Item product={product} />;
        })
      ) : (
        <div
          style={{
            color: "#2F5241",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="login-title-2"
        >
          Choose a province to discover its delicacies!
        </div>
      )}
    </div>
  );
}

export default ItemList;

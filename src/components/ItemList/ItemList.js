import React, { useState } from "react";

// components
import Item from "./Item";

// styles
import { itemListWrapperStyle } from "./style";

function ItemList({ chosenProvince }) {
  const [items, setItems] = useState([1]);
  return (
    <div style={itemListWrapperStyle}>
      {items.map((item) => {
        return <Item />;
      })}
      <div>{chosenProvince}</div>
    </div>
  );
}

export default ItemList;

import React, { useState } from "react";

// styles
import { wrapperStyle } from "./style";

function Counter() {
  const [count, setCount] = useState(0);

  return <div style={{ height: 32, borderRadius: 10 }}></div>;
}

function InfoScreen() {
  return (
    <div style={wrapperStyle}>
      <div>
        <div className="province-name">Chau Thanh Dragon Fruit</div>
        <div style={{ fontSize: 14 }} className="province-name">
          Fresh and delicious
        </div>
        <div style={{ fontSize: 16, marginTop: 20 }} className="product-price">
          19.900 / kg
        </div>
      </div>
      <div>
        <div>Quantity</div>
      </div>
    </div>
  );
}

export default InfoScreen;

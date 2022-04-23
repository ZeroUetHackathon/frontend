import React, { useRef, useState, useEffect } from "react";

// styles
import { itemWrapperStyle } from "./style";

function ShopItem() {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const outerWidth = ref.current.offsetWidth;
      setWidth(outerWidth);
    }
  }, []);

  return (
    <div ref={ref} style={itemWrapperStyle}>
      <img
        style={{ width: width - 10, height: width - 10, borderRadius: 5 }}
        alt="item image"
      />
      <div className="product-name">Lira earrings</div>
      <div className="product-price">$17.90</div>
    </div>
  );
}

export default ShopItem;

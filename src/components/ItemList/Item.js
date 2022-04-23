import React from "react";

// components
import LineDivider from "../LineDivider/LineDivider";

// styles
import {
  itemWrapperStyle,
  itemInfoStyle,
  itemImageStyle,
  itemSaleInfoStyle,
} from "./style";

function Item({ itemInfo, product }) {
  return (
    <div style={itemWrapperStyle}>
      <img style={itemImageStyle} src={product.photos[0]} alt="product image" />
      <div style={itemInfoStyle}>
        <div>
          <div style={{ marginTop: -10 }} className="product-name">
            {product.name}
          </div>
          <div
            style={{ marginTop: 10 }}
            className="product-description overview"
          >
            Please add your content here. Keep it short and simple. And smile :)
          </div>
        </div>

        <div>
          <LineDivider />

          <div style={itemSaleInfoStyle}>
            <div className="product-price">{`${product.sale[0].price} VND / kg`}</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="product-description"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                |
              </div>
              <div style={{ color: "black" }} className="product-price">
                {product.sale[0].sold}
              </div>
              <div
                style={{ color: "#688275", marginLeft: 5 }}
                className="product-price"
              >
                sold
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

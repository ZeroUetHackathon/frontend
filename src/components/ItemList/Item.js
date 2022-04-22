import React from "react";

// styles
import {
  itemWrapperStyle,
  itemInfoStyle,
  itemImageStyle,
  itemSaleInfoStyle,
} from "./style";

function Item() {
  return (
    <div style={itemWrapperStyle}>
      <img style={itemImageStyle} alt="product image" />
      <div style={itemInfoStyle}>
        <div>
          <div style={{ marginTop: -10 }} className="product-name">
            Headline
          </div>
          <div
            style={{ marginTop: 10 }}
            className="product-description overview"
          >
            Please add your content here. Keep it short and simple. And smile :)
          </div>
        </div>

        <div>
          {/* line divider */}
          <div
            style={{
              height: 0,
              width: "100%",
              border: "1px solid #E6E6E6",
              marginTop: 20,
            }}
          />

          <div style={itemSaleInfoStyle}>
            <div className="product-price">19.000 VND / kg</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="product-description"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                |
              </div>
              <div style={{ color: "black" }} className="product-price">
                6.9k
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

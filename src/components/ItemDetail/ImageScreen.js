import React, { useState } from "react";

// components
import ImageCol from "./ImageCol";

// styles
import { wrapperStyle, imgWrapper } from "./style";

function ImageScreen({ images }) {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div style={{ ...wrapperStyle, width: "100%" }}>
      <div>
        <div style={imgWrapper}>
          <ImageCol images={images} setMainImg={setMainImg} />
          <img
            style={{
              width: "80%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 5,
            }}
            src={mainImg}
            alt="product image"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageScreen;

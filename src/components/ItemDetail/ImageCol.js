import React, { useRef, useState, useEffect } from "react";

// styles
import { imgColWrapper } from "./style";

function ImageCol({ images, setMainImg }) {
  const [width, setWidth] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const outerWidth = ref.current.offsetWidth;
      setWidth(outerWidth);
    }
  }, []);

  return (
    <div ref={ref} style={imgColWrapper}>
      {images.map((image) => {
        return (
          <a style={{ marginBottom: 10 }} onClick={() => setMainImg(image)}>
            <img
              style={{ width: width, height: width, borderRadius: 5 }}
              src={image}
              alt="image"
            />
          </a>
        );
      })}
    </div>
  );
}

export default ImageCol;

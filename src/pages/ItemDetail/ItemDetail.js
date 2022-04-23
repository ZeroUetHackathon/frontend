import React from "react";

// components
import ImageScreen from "../../components/ItemDetail/ImageScreen";
import InfoScreen from "../../components/ItemDetail/InfoScreen";

// styles
import { mainWrapperStyle } from "./style";
import "../../App.css";

function ItemDetail({ product }) {
  const images = [
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671834/zero/thanh-long-chau-thanh-long-an_xzzvkh.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
  ];
  return (
    <div style={mainWrapperStyle}>
      <div style={{ width: "53%" }}>
        <ImageScreen images={images} />
      </div>
      <div className="sticky" style={{ width: "43%" }}>
        <InfoScreen />
      </div>
    </div>
  );
}

export default ItemDetail;

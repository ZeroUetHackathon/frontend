import React from "react";

// components
import SideMenu from "../../components/SideMenu/SideMenu";
import ShopItem from "../../components/Shop/ShopItem";

// styles
import { wrapperStyle } from "./style";

function ShopDetail() {
  const test = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const images = [
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671834/zero/thanh-long-chau-thanh-long-an_xzzvkh.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650671835/zero/vuonthanhlong-longan_qj1ggv.jpg",
    "https://res.cloudinary.com/dmbz4r0vl/image/upload/v1650462148/zero/20210419_031355_903112_qua-thanh-long-3.max-1800x1800_r8jvae.jpg",
  ];
  return (
    <div style={wrapperStyle}>
      <SideMenu />
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {images.map((img) => {
          return <ShopItem img={img} />;
        })}
      </div>
    </div>
  );
}

export default ShopDetail;

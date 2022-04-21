import React from "react";

// components
import Map from "../../components/Map/Map";

// styles
import { bodyStyle } from "./style";

function Home() {
  return (
    <div style={bodyStyle}>
      <Map />
    </div>
  );
}

export default Home;

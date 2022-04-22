import React, { useState } from "react";

// components
import Map from "../../components/Map/Map";
import ItemList from "../../components/ItemList/ItemList";
import Wiki from "../../components/Wiki/Wiki";

// styles
import { bodyStyle, wrapperRightStyle } from "./style";

function Home() {
  const [chosenProvince, setChosenProvince] = useState("");

  return (
    <div style={bodyStyle}>
      <Map
        chosenProvince={chosenProvince}
        setChosenProvince={setChosenProvince}
      />
      <div style={wrapperRightStyle}>
        <ItemList chosenProvince={chosenProvince} />
        <Wiki />
      </div>
    </div>
  );
}

export default Home;

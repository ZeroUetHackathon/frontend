import React, { useState, useEffect } from "react";

// components
import Map from "../../components/Map/Map";
import ItemList from "../../components/ItemList/ItemList";
import Wiki from "../../components/Wiki/Wiki";

// api
import getAPI from "../../api/getAPI";

// styles
import { bodyStyle, wrapperRightStyle } from "./style";
import axiosInstance from "../../utils/axios";

function Home() {
  const [chosenProvince, setChosenProvince] = useState("");
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (chosenProvince) {
      setLoading(true);
      getProduct(chosenProvince);
    } else {
      setProductDetail([]);
    }
  }, [chosenProvince]);

  const getProduct = async (id) => {
    try {
      const res = await axiosInstance.get(getAPI(id).getProductByProvince);
      console.log(res.status === 200);
      if (res.status === 200) {
        setProductDetail(res.data.products);
      }
      console.log(res.data.products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={bodyStyle}>
      <Map
        chosenProvince={chosenProvince}
        setChosenProvince={setChosenProvince}
      />
      <div style={wrapperRightStyle}>
        <ItemList
          chosenProvince={chosenProvince}
          products={productDetail.length !== 0 ? productDetail[0].products : []}
        />
        {!loading && productDetail.length !== 0 && (
          <Wiki markdown={productDetail[0].wiki} />
        )}
      </div>
    </div>
  );
}

export default Home;

import PicturesOfProduct from "../../components/Itemproperty/PicturesOfProduct/PicturesOfProduct"
import Company from "../../components/Itemproperty/Company/Company"
import Navigation from "../../components/Itemproperty/Navigation/Navigation"

import React from "react"
import ProductInfo from "../../components/Itemproperty/ProductInfo/ProductInfo"

const Itemproperty = () => (
        <div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <Navigation />
            <PicturesOfProduct />
            <Company/>
            <ProductInfo/>
            </div>
        </div>

)

export default Itemproperty
import React from 'react'
import { wrapper } from './style'
import companyIcon from "../../../assets/images/companyIcon.png"
import customerIcon from "../../../assets/images/customerIcon.png"

export default function Company() {
  return (
    <div style={wrapper}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}>
        <img src={companyIcon} style={{ padding: "10px" }} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          }}>
          <p style={{
            // position: "static",
            width: "367px",
            height: "20px",
            left: "0px",
            top: "0px",
            fontFamily: "Mulish",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "left",
            flex: "none",
            order: "0",
            flexGrow: "0",
            margin: "4px 0px",
          }}>CITY</p>
          <p style={{
            width: "203px",
            height: "18px",
            left: "0px",
            top: "24px",

            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            color: "#181818",
            flex: "none",
            order: "1",
            flexGrow: "0",
            margin: "4px 0px",
          }}>Add:147 Xuan Thuy</p>
        </div>
      </div>
      <img src={customerIcon}/>
    </div>
  )
}

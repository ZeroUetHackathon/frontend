import React from 'react'
import { Group_10,chervon_right,chervon_left,Vector } from './style'
import smallVectorRight from "../../../../assets/images/smallVectorRight.png"
import smallVectorLeft from "../../../../assets/images/smallVectorLeft.png"

export default function FooterVector() {
  return (
    <div style={Group_10}>
        <div style={chervon_right}>
            <img src={smallVectorRight} style={Vector}></img>
        </div>
        <div style={chervon_left}>
            <img src={smallVectorLeft} style={Vector}></img>
        </div>
    </div>
  )
}

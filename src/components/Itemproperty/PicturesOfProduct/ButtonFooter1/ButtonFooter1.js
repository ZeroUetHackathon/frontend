import React from 'react'
import { styleButton,styleCameraIcon } from './style'
import camera from "../../../../assets/images/camera.png"
export default function ButtonFooter1() {
  return (
    <button style={styleButton}>
        <img src={camera} style={styleCameraIcon}></img>
        <div>3/5</div>
    </button>
  )
}

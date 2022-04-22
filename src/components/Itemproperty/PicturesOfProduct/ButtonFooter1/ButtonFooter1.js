import React from 'react'
import { styleButton,styleCameraIcon,styleNumberPic,styleButtonDiv } from './style'
import camera from "../../../../assets/images/camera.png"
export default function ButtonFooter1() {
  const currentPic=3;
  const totalPic=5;
  return (
    <button style={styleButton}>
        <img src={camera} style={styleCameraIcon}></img>
        <p style={styleNumberPic}>{`${currentPic} / ${totalPic}`}</p>
        <div style={styleButtonDiv}></div>
    </button>
  )
}

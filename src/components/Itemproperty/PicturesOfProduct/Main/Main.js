import React from 'react'
import { Wrapper,styleSmallPic,containerSmallPic,styleBigPic } from './style'
export default function Main() {
    const PickItems = ["a", "b", "c"];
  return (
    <div style={Wrapper}>
        <div style={containerSmallPic}>
            {PickItems.map(PickItem => (
                <img src={PickItem} style={styleSmallPic} />
            ))}
        </div>
        <img style={styleBigPic}></img>
        
    </div>
  )
}

import { wrapper, Group_10, chervon_right, chervon_left, Vector,styleButton,styleCameraIcon,styleNumberPic,styleButtonDiv } from './style'
import smallVectorRight from "../../../../assets/images/smallVectorRight.png"
import smallVectorLeft from "../../../../assets/images/smallVectorLeft.png"
import camera from "../../../../assets/images/camera.png"

export default function Footer() {
    const currentPic=3;
    const totalPic=5;
    return (
        <div style={wrapper}>
            <div style={Group_10}>
                <button style={chervon_right}>
                    <img src={smallVectorRight} style={Vector}></img>
                </button>
                <button style={chervon_left}>
                    <img src={smallVectorLeft} style={Vector}></img>
                </button>
            </div>
            <button style={styleButton}>
                <img src={camera} style={styleCameraIcon}></img>
                <p style={styleNumberPic}>{`${currentPic} / ${totalPic}`}</p>
            <div style={styleButtonDiv}></div>
                
            </button>
        </div>
    )
}

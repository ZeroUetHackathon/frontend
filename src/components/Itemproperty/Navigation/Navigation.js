import { wrapper,navi_1,chervon_right,vector,navi_2 } from "./style"
import vectorpng from "../../../assets/images/vector.png"
const Navigation = () => {
    return (
        <div style={wrapper}>
            <div style={navi_1}>Main</div>
            <div style={chervon_right}>
                <img src={vectorpng} style={vector}/>
            </div>
            <div style={navi_2}>Lorem</div>
        </div>
    )
}

export default Navigation
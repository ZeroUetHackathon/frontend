import { stylePic } from "./style"
const SmallProductPics = () => {
    const PickItems = ["a", "b","c"];
    return (
        // <img src={src} style={{...style,...stylePic}}></img>
        PickItems.map(PickItem => (
            <img src={PickItem} style={stylePic}/>
        ))
    )
}

export default SmallProductPics;
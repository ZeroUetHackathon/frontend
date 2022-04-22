import BigProductPic from "./BigProductPic/BigProductPic"
import ButtonFooter1 from "./ButtonFooter1/ButtonFooter1"
import Footer from "./Footer/Footer"
import FooterVector from "./FooterVector/FooterVector"
import SmallProductPics from "./SmallProductPics/SmallProductPics"
import { Rectangle_3 } from "./style"
export default function PicturesOfProduct() {
  return (
    <div style={Rectangle_3}>
      <SmallProductPics/>
      <BigProductPic />
      {/* <FooterVector/> */}
      {/* <ButtonFooter1/> */}
      <Footer/>
    </div>
  )
}
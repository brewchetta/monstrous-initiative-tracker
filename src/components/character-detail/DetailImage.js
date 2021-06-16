import boar from "assets/images/woodcut-boar.png"
import imp from "assets/images/woodcut-imp.png"
import knight from "assets/images/woodcut-knight.png"
import lion from "assets/images/woodcut-lion.png"
import skeleton from "assets/images/woodcut-skeleton.png"
import squid from "assets/images/woodcut-squid.png"
import moon from "assets/images/woodcut-style-man-moon.png"
import fire from "assets/images/woodcut-fire.png"
import gear from "assets/images/woodcut-gear.png"
import butterfly from "assets/images/woodcut-butterfly.png"

export default function DetailImage({charType}) {

  let source = charType === "aberration" ? squid
  : charType === "monstrosity" ? lion
  : charType === "humanoid" ? knight
  : charType === "fiend" ? imp
  : charType === "undead" ? skeleton
  : charType === "beast" ? boar
  : charType === "construct" ? gear
  : charType === "elemental" ? fire
  : charType === "fey" ? butterfly
  : charType === "celestial" || charType === "plant" ? moon
  : knight

  return (

    <img id="character-detail-image" src={source} alt={""} />

  )

}

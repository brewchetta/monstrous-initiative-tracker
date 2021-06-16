import boar from "images/woodcut-boar.png"
import imp from "images/woodcut-imp.png"
import knight from "images/woodcut-knight.png"
import lion from "images/woodcut-lion.png"
import skeleton from "images/woodcut-skeleton.png"
import squid from "images/woodcut-squid.png"
import moon from "images/woodcut-style-man-moon.png"
import fire from "images/woodcut-fire.png"
import gear from "images/woodcut-gear.png"
import butterfly from "images/woodcut-butterfly.png"

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

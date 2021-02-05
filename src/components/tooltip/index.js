import { useContext } from "react"
import { TooltipContext } from "../../context/tooltip-context"
import "./style.css"

export default function Tooltip() {

  const [tooltip] = useContext(TooltipContext)

  if (tooltip.type === "spell") {
    console.log(tooltip.position.x);
    return (
      <div id="spell-tooltip"
        style={{top: `${tooltip.position.y + 10}px`, left: `${tooltip.position.x + 10}px`}}>

        <p>{tooltip.content} {tooltip.position.x}</p>

      </div>
    )
  } else {
    return null
  }


}

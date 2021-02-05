import { useContext } from "react"
import { TooltipContext } from "../../context/tooltip-context"
import "./style.css"

export default function Tooltip() {

  const [tooltip] = useContext(TooltipContext)

  if (tooltip.type === "spell") {
    return (
      <div id="spell-tooltip">

        <p>{tooltip.content}</p>

      </div>
    )
  } else {
    return null
  }


}

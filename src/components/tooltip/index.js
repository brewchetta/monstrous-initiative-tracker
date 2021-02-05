import { useContext } from "react"
import { TooltipContext } from "../../context/tooltip-context"
import "./style.css"

export default function Tooltip() {

  const [tooltip] = useContext(TooltipContext)

  if (tooltip.type === "spell") {

    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight

    return (
      <div id="spell-tooltip"
        style={{bottom: `${height - tooltip.position.y}px`, right: `${width - tooltip.position.x + 10}px`}}>

        <p>{tooltip.content}</p>

      </div>
    )
  } else {
    return null
  }


}

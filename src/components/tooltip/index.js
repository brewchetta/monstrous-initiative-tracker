import { useContext, useState, useEffect } from "react"
import { getSpell } from "../../services/dnd-5e-api"
import SpellDetailsView from "./SpellDetailsView"
import { TooltipContext } from "../../context/tooltip-context"
import "./style.css"

export default function Tooltip() {

  const [spellDetails, setSpellDetails] = useState({})
  const [tooltip] = useContext(TooltipContext)

  useEffect(() => {
    tooltip.content && getSpell(tooltip.content.toLowerCase().replace(/['-]/g,""))
      .then(spell => setSpellDetails(spell))
    !tooltip.content && setSpellDetails({})
  } ,[tooltip])

  if (tooltip.type === "spell") {

    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight

    return (
      <div id="spell-tooltip"
        style={{
          bottom: `${height - tooltip.position.y - 100 > 0 ? height - tooltip.position.y - 100 : 0}px`,
          right: `${width - tooltip.position.x + 10}px`,
          display: spellDetails.name || spellDetails.error ? "block" : "none"
        }}>

        <SpellDetailsView spellDetails={spellDetails} />

      </div>
    )
  } else {
    return null
  }


}

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

    return (
      <div id="spell-tooltip"
        style={{left: `${spellDetails.name || spellDetails.error ? '0' : '-40'}vw`}}>

        <SpellDetailsView spellDetails={spellDetails} />

      </div>
    )


}

import { useState, useEffect } from "react"
import { getSpell } from "services/dnd-5e-api"
import SpellDetailsView from "./SpellDetailsView"
import { useTooltipContext } from "context/tooltip-context"
import { useSpellsContext } from "context/spells-context"
import spellMoon from "assets/images/thorn-image.png"
import "./style.css"

export default function Tooltip() {

  const [spellDetails, setSpellDetails] = useState({})
  const {tooltip} = useTooltipContext()
  const spells = useSpellsContext()

  useEffect(() => {
    if (tooltip.content && spells.all[tooltip.content.toLowerCase()]) {
      setSpellDetails(spells.all[tooltip.content.toLowerCase()])
    } else {
      tooltip.content && getSpell(tooltip.content)
      .then(spell => {
        !spell.error && spells.addSpell(spell)
        setSpellDetails(spell)
      })
      !tooltip.content && setSpellDetails({})
    }
  } ,[tooltip, spells])

    return (
      <div id="spell-tooltip"
        style={{left: `${tooltip.type ? '0' : '-40'}vw`}}>

        <img id="spell-background-image" src={spellMoon} alt={""} />

        <SpellDetailsView spellDetails={spellDetails} />

      </div>
    )


}

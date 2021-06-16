import { useContext, useState, useEffect } from "react"
import { getSpell } from "services/dnd-5e-api"
import SpellDetailsView from "./SpellDetailsView"
import { TooltipContext } from "context/tooltip-context"
import { SpellsContext } from "context/spells-context"
import spellMoon from "images/thorn-image.png"
import "./style.css"

export default function Tooltip() {

  const [spellDetails, setSpellDetails] = useState({})
  const [tooltip] = useContext(TooltipContext)
  const [spellsList, dispatchSpells] = useContext(SpellsContext)

  useEffect(() => {
    if (tooltip.content && spellsList[tooltip.content.toLowerCase()]) {
      setSpellDetails(spellsList[tooltip.content.toLowerCase()])
    } else {
      tooltip.content && getSpell(tooltip.content)
      .then(spell => {
        !spell.error && dispatchSpells({type: "ADD_SPELL", payload: spell})
        setSpellDetails(spell)
      })
      !tooltip.content && setSpellDetails({})
    }
  } ,[tooltip, spellsList, dispatchSpells])

    return (
      <div id="spell-tooltip"
        style={{left: `${tooltip.type ? '0' : '-40'}vw`}}>

        <img id="spell-background-image" src={spellMoon} alt={""} />

        <SpellDetailsView spellDetails={spellDetails} />

      </div>
    )


}

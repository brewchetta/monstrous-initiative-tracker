import { useContext, useState, useEffect } from "react"
import { getSpell } from "../../services/dnd-5e-api"
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

        {spellDetails.error ? <p>"Unable to fetch that spell, sorry!"</p> : null}
        {spellDetails.name ? <p>{spellDetails.name}</p> : null}
        <p>
          {spellDetails.level ? <span>Level {spellDetails.level}</span> : null}{spellDetails.casting_time ? <span>  |  Casting Time: {spellDetails.casting_time}</span> : null}{spellDetails.duration ? <span>  |  Duration: {spellDetails.duration}</span> : null}
        </p>
        <p>{spellDetails.concentration ? <span>Concentration</span> : null}</p>
        <p>
          {spellDetails.components ? <span>Components: {spellDetails.components.join(" ")}</span> : null}{spellDetails.material ? <span> |  Materials: {spellDetails.material}</span> : null}{spellDetails.ritual ? <span>  |  Can be cast as a ritual</span> : null}
        </p>
        {spellDetails.desc ? <p>{spellDetails.desc}</p> : null}
        {spellDetails.school ? <span>School: {spellDetails.school.name}</span> : null}

      </div>
    )
  } else {
    return null
  }


}

import { useState } from 'react'
import { useTooltipContext } from "context/tooltip-context"

export default function Spell({spell, removeSpell}) {

  // STATE //

  const [hovered, setHovered] = useState(false)

  const {inspectSpell, clearTooltip} = useTooltipContext()

  const handleRemoveSpell = () => {
    removeSpell(spell)
    clearTooltip()
  }

  // EVENT HANDLERS //

  const handleMouseEnter = (e, spellName) => {
    inspectSpell({spellName})
    setHovered(true)
  }

  const handleMouseLeave = () => {
    clearTooltip()
    setHovered(false)
  }

  const button = (
    <button className="remove-spell-button" style={{opacity: hovered ? null : "0"}} onClick={handleRemoveSpell}>
      X
    </button>
  )

  // RENDER //

  return (
    <span className="spell-span"
    onMouseEnter={event => handleMouseEnter(event, spell.name)}
    onMouseLeave={handleMouseLeave}
    key={spell.name}><a className="spell-link" rel="noreferrer" href={`https://www.dndbeyond.com/spells/${spell.name.toLowerCase().replaceAll(' ','-').replace(/[']/g, "")}`} target="_blank">{spell.name}</a> {button}</span>
  )

}

import { useContext } from 'react'
import { TooltipContext } from "../../context/tooltip-context"

export default function Spell({spell}) {

  const dispatch = useContext(TooltipContext)[1]

  const handleMouseEnter = (e, spellName) => {
    dispatch({type: "INSPECT_SPELL", payload: {spellName, x: e.clientX, y: e.clientY}})
  }

  const handleMouseLeave = () => dispatch({type: "CLEAR_TOOLTIP"})

  return (
    <span className="spell-span"
    onMouseEnter={event => handleMouseEnter(event, spell.name)}
    onMouseLeave={handleMouseLeave}
    key={spell.name}>{spell.name}</span>
  )

}

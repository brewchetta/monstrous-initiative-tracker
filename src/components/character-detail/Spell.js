import { useContext, useState } from 'react'
import { TooltipContext } from "../../context/tooltip-context"

export default function Spell({spell}) {

  // STATE //

  const [hovered, setHovered] = useState(false)

  const dispatch = useContext(TooltipContext)[1]

  // EVENT HANDLERS //

  const handleMouseEnter = (e, spellName) => {
    dispatch({type: "INSPECT_SPELL", payload: {spellName, x: e.clientX, y: e.clientY}})
    setHovered(true)
  }

  const handleMouseLeave = () => {
    dispatch({type: "CLEAR_TOOLTIP"})
    setHovered(false)
  }

  const button = <button className="remove-spell-button" onClick={() => console.log("remove spell")}>
                  {hovered ? 'X' : ''}
                </button>

  // RENDER //

  return (
    <span className="spell-span"
    onMouseEnter={event => handleMouseEnter(event, spell.name)}
    onMouseLeave={handleMouseLeave}
    key={spell.name}>{spell.name} {button}</span>
  )

}

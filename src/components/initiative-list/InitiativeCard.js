import { useState } from 'react'

export default function InitiativeCard({character, index}) {

  const [initiative, setInitiative] = useState(character.initiative)

  const changeInitiative = () => {
    setInitiative(character.rollInitiative())
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}
    onClick={changeInitiative}>
      {character.name} \|/ {character.armor_class} AC \|/ {initiative}
    </div>
  )

}

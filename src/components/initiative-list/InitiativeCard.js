import { useContext } from 'react'
import { CharactersContext } from '../../context/characters-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  const handleRollInitiative = () => {
    character.rollInitiative()
    updateCharacter(character)
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}
    onClick={console.log}>
      {character.name} \|/ {character.armor_class} AC \|/ <span
      onClick={handleRollInitiative}>
        {character.initiative || "⚅ Roll for "} Initiative
      </span>
    </div>
  )

}

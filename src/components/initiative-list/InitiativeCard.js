import { useContext } from 'react'
import { CharactersContext } from '../../context/characters-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  const handleClick = () => {
    character.rollInitiative()
    updateCharacter(character)
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}
    onClick={handleClick}>
      {character.name} \|/ {character.armor_class} AC \|/ {character.initiative} Initiative
    </div>
  )

}

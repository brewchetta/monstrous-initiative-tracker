import { useContext } from 'react'
import { DetailContext } from '../../context/detail-context'
import { CharactersContext } from '../../context/characters-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  const [detail, dispatchDetail] = useContext(DetailContext)
  const [characters, dispatchCharacters] = useContext(CharactersContext)

  const handleRollInitiative = () => {
    character.rollInitiative()
    updateCharacter(character)
  }

  const handleOpenDetail = () => {
    if (detail !== character) {
      dispatchDetail({type: "INSPECT_CHARACTER", payload: character})
    }
  }

  const handleRemove = () => {
    dispatchCharacters({type: "REMOVE_CHARACTER", payload: character})
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}>
      {character.name} | {character.armor_class} 🛡️ | <span
      onClick={handleRollInitiative}>
        {character.initiative >= -4 ? character.initiative : "⚅ Roll for "} Initiative
      </span> | <span onClick={handleOpenDetail}>📖 More</span> | <span onClick={handleRemove}>Delete</span>
    </div>
  )

}

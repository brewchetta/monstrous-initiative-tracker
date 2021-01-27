import { useContext } from 'react'
import { DetailContext } from '../../context/detail-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  const [detail, dispatchDetail] = useContext(DetailContext)

  const handleRollInitiative = () => {
    character.rollInitiative()
    updateCharacter(character)
  }

  const handleOpenDetail = () => {
    if (detail !== character) {
      dispatchDetail({type: "INSPECT_CHARACTER", payload: character})
    }
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}>
      {character.name} | {character.armor_class} 🛡️ | <span
      onClick={handleRollInitiative}>
        {character.initiative >= -4 ? character.initiative : "⚅ Roll for "} Initiative
      </span> | <span onClick={handleOpenDetail}>📖 More</span>
    </div>
  )

}

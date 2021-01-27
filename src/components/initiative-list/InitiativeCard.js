import { useContext, useState } from 'react'
import { DetailContext } from '../../context/detail-context'
import { CharactersContext } from '../../context/characters-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  const [detail, dispatchDetail] = useContext(DetailContext)
  const [characters, dispatchCharacters] = useContext(CharactersContext)
  const [hitPointsOpen, setHitPointsOpen] = useState(false)
  const [currentHitPoints, setCurrentHitPoints] = useState(character.hit_points)

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

  const handleSetHitPoints = e => {
    const newHP = parseInt(e.target.value)
    if (newHP > 0) {
      setCurrentHitPoints(newHP)
    } else {
      console.log("remove character")
    }
  }

  const renderHitPoints = () => {
    if (hitPointsOpen) {
      return (
        <span>
          <input type="number"
          onChange={e => setCurrentHitPoints(e.target.value)}
          onBlur={() => setHitPointsOpen(false)}
          value={currentHitPoints}
          placeholder={"hit points"}
          />
          /{character.hit_points}
        </span>
      )
    } else {
      return (<span onClick={() => setHitPointsOpen(true)}>{`${currentHitPoints}/${character.hit_points} ♡`}</span>)
    }
    console.log(currentHitPoints)
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}>
      {character.name} | {character.armor_class} 🛡️ | <span
      onClick={handleRollInitiative}>
        {character.initiative >= -4 ? character.initiative : "⚅ Roll for "} Initiative
      </span> | {renderHitPoints()} | <span onClick={handleOpenDetail}>📖 More</span> | <span onClick={handleRemove}>Delete</span>
    </div>
  )

}

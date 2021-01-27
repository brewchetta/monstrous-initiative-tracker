import { useContext, useState, useRef, useEffect } from 'react'
import { DetailContext } from '../../context/detail-context'
import { CharactersContext } from '../../context/characters-context'

export default function InitiativeCard({character, index, updateCharacter}) {

  // STATE //

  const [detail, dispatchDetail] = useContext(DetailContext)
  const dispatchCharacters = useContext(CharactersContext)[1]
  const [hitPointsOpen, setHitPointsOpen] = useState(false)
  const [currentHitPoints, setCurrentHitPoints] = useState(character.hit_points)
  const [initiativeOpen, setInitiativeOpen] = useState(false)
  const [initiativeInput, setInitiativeInput] = useState(0)

  // REF //

  const focusedInput = useRef(null)

  useEffect(() => {
    if (hitPointsOpen || initiativeOpen) {
      focusedInput.current.focus();
    }
  }, [hitPointsOpen, initiativeOpen]);

  // EVENT HANDLERS //

  const handleRollInitiative = () => {
    if (character.initiative > -5) {
      setInitiativeInput(character.initiative)
      setInitiativeOpen(true)
    } else {
      const init = character.rollInitiative()
      character.initiative = init
      setInitiativeInput(init)
      updateCharacter(character)
    }
  }

  const handleOpenDetail = () => {
    if (detail !== character) {
      dispatchDetail({type: "INSPECT_CHARACTER", payload: character})
    }
  }

  const handleRemove = () => {
    dispatchCharacters({type: "REMOVE_CHARACTER", payload: character})
  }

  const handleCloseHitPoints = () => {
    setHitPointsOpen(false)
    if (currentHitPoints <= 0) {
      console.log("remove character?");
    }
  }

  const handleCloseInitiative = () => {
    setInitiativeOpen(false)
    character.initiative = parseInt(initiativeInput)
    updateCharacter(character)
  }

  // RENDERS //

  const renderHitPoints = () => {
    if (hitPointsOpen) {
      return (
        <span>
          <input type="number"
          onChange={e => setCurrentHitPoints(e.target.value)}
          onBlur={handleCloseHitPoints}
          value={currentHitPoints}
          placeholder={"hit points"}
          onKeyUp={e => e.keyCode === 13 ? handleCloseHitPoints() : null}
          min={0}
          ref={focusedInput}
          />
          /{character.hit_points}
        </span>
      )
    } else {
      return (<span onClick={() => setHitPointsOpen(true)}>{`${currentHitPoints}/${character.hit_points} ♡`}</span>)
    }
  }

  const renderInitiative = () => {
    if (initiativeOpen) {
      return (
        <span>
          <input type="number"
          onChange={e => setInitiativeInput(e.target.value)}
          onBlur={handleCloseInitiative}
          value={initiativeInput}
          placeholder={"initiative"}
          onKeyUp={e => e.keyCode === 13 ? handleCloseInitiative() : null}
          min={-4}
          ref={focusedInput}
          /> Initiative
        </span>
      )
    } else {
      return (<span
      onClick={handleRollInitiative}>
        {character.initiative >= -5 ? character.initiative : "⚅ Roll for "} Initiative
      </span>)
    }
  }

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}>
      {character.name} | {character.armor_class} 🛡️ | {renderInitiative()} | {renderHitPoints()} | <span onClick={handleOpenDetail}>📖 More</span> | <span onClick={handleRemove}>Delete</span>
    </div>
  )

}

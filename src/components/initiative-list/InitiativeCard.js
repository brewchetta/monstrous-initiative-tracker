import { useContext, useState, useRef, useEffect } from 'react'
import { DetailContext } from '../../context/detail-context'
import { CharactersContext } from '../../context/characters-context'
import StatusIcons from './StatusIcons'

export default function InitiativeCard({character, index, updateCharacter}) {

  // STATE //

  const [detail, dispatchDetail] = useContext(DetailContext)
  const dispatchCharacters = useContext(CharactersContext)[1]
  const [hitPointsOpen, setHitPointsOpen] = useState(false)
  const [tempHitPointsOpen, setTempHitPointsOpen] = useState(false)
  const [currentHitPoints, setCurrentHitPoints] = useState(character.hit_points)
  const [currentTempHP, setCurrentTempHP] = useState(character.tempHP)
  const [initiativeOpen, setInitiativeOpen] = useState(false)
  const [initiativeInput, setInitiativeInput] = useState(0)

  // REF //

  const focusedInput = useRef(null)

  useEffect(() => {
    if (hitPointsOpen || initiativeOpen || tempHitPointsOpen) {
      focusedInput.current.focus();
    }
  }, [hitPointsOpen, initiativeOpen, tempHitPointsOpen]);

  useEffect(() => {
    setCurrentTempHP(character.tempHP)
  }, [character]);

  const hitpointPercentage = () => currentHitPoints / character.hit_points

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

  const handleCloseHitPoints = () => setHitPointsOpen(false)
  const handleCloseTempHitPoints = () => {
    setTempHitPointsOpen(false)
    character.tempHP = parseInt(currentTempHP)
    updateCharacter(character)
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
          max={character.hit_points}
          ref={focusedInput}
          />
          /{character.hit_points}
        </span>
      )
    } else {
      return (<span onClick={() => setHitPointsOpen(true)}>{currentHitPoints}/{character.hit_points}</span>)
    }
  }

  const renderTemporaryHitpoints = () => {
    if (tempHitPointsOpen) {
      return (
        <span> + <input type="number"
          onChange={e => setCurrentTempHP(e.target.value)}
          onBlur={handleCloseTempHitPoints}
          value={currentTempHP}
          placeholder={"hit points"}
          onKeyUp={e => e.keyCode === 13 ? handleCloseHitPoints() : null}
          min={0}
          ref={focusedInput}
          />
        </span>
      )
    } else {
      return (<span onClick={() => setTempHitPointsOpen(true)}>{character.tempHP ? ` + ${character.tempHP}` : null}</span>)
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

  const renderName = () => `${character.name || "Unknown"}${character.char_class ? ` the ${character.char_class}` : ""}`

  const renderClass = () => (
    hitpointPercentage() > 0.5 ? "initiative-card"
    : hitpointPercentage() > 0 ? "initiative-card bloodied-character"
    : "initiative-card dead-character"
  )

  return (
    <div className={renderClass()}
    style={{top: `${index * 55}px`}}>
      <span onClick={handleOpenDetail}>{renderName()}</span> | {character.armor_class} 🛡️ | {renderInitiative()} | {renderHitPoints()}{renderTemporaryHitpoints()}♡ | <span onClick={handleOpenDetail}>📖 More</span> | <span onClick={handleRemove}>Delete</span>
      <StatusIcons hitpointPercentage={hitpointPercentage()} />
    </div>
  )

}

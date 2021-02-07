// REACT //
import { useState, useEffect, useCallback } from "react"
import { saveMonster } from '../../services/localstorage'
// COMPONENTS //
import ActionsList from './ActionsList'
import SpellsList from './SpellsList'
import GeneralInfo from './GeneralInfo'
import CharacterSelectField from './CharacterSelectField'
import DetailImage from './DetailImage'
// STYLE //
import "./CharacterDetailCard.css"
import beyondIcon from "../../images/beyond-icon.png"

export default function CharacterDetailCard({character, updateCharacter}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)
  const [detailMode, setDetailMode] = useState("general")

  const memoizedSubmit = useCallback(handleSubmit, [formInputs])

  useEffect(() => {
    memoizedSubmit()
  }, [memoizedSubmit,formInputs])

  useEffect(() => {
    console.log(character)
  }, [character])

  // EVENT HANDLERS

  const handleChange = event => {
    const {target} = event
    const value = target.type === "number" ? parseInt(target.value)
    : target.type === "checkbox" ? target.checked
    : target.value
    setFormInputs({...formInputs, ...{[event.target.name]: value}})
  }

  const handleNewSpell = newSpell => {
    setFormInputs(Object.assign(formInputs, { spells: [...formInputs.spells, newSpell] }))
    handleSubmit()
  }

  const handleAddAction = () => {
    setFormInputs(Object.assign(formInputs, { [detailMode]: [...formInputs[detailMode], {full_description: ""}] }))
    handleSubmit()
  }

  function handleSubmit(e) {
    e && e.preventDefault()
    updateCharacter(formInputs)
  }

  const handleSaveToStorage = () => saveMonster(formInputs)

  const handleChangeDetailMode = e => setDetailMode(e.target.name)

  const handleSubmitAction = (description, index) => {
    const actions = {
      actions: formInputs.actions.map((a, i) => {
        if (i === index) {
          return ({...a, full_description: description})
        } else {
          return a
        }
      }).filter(a => a.full_description)
    }
    setFormInputs(Object.assign(formInputs, actions))
    handleSubmit()
  }

  const handleSubmitSpecialAbility = (description, index) => {
    const special_abilities = {
      special_abilities: formInputs.special_abilities.map((s, i) => {
        if (i === index) {
          return ({...s, full_description: description})
        } else {
          return s
        }
      })
    }
    setFormInputs(Object.assign(formInputs, special_abilities))
  }

  const handleSubmitLegendaryAction = (description, index) => {
    const legendary_actions = {
      legendary_actions: formInputs.legendary_actions.map((a, i) => {
        if (i === index) {
          return ({...a, full_description: description})
        } else {
          return a
        }
      }).filter(a => a.full_description)
    }
    setFormInputs(Object.assign(formInputs, legendary_actions))
  }

  // RENDER METHODS //

  const renderDetailMode = () => {
    switch (detailMode) {
      case "general":
        return <GeneralInfo formInputs={formInputs} handleChange={handleChange} />
      case "actions":
        return (<ActionsList key="actions mode"
          actions={character.actions}
          handleSubmit={handleSubmitAction}
          handleAdd={handleAddAction} />)
      case "special_abilities":
        return (<ActionsList key="special abilities mode"
          actions={character.special_abilities}
          handleSubmit={handleSubmitSpecialAbility}
          handleAdd={handleAddAction} />)
      case "spells":
        return (<SpellsList key="spells mode"
          spells={formInputs.spells}
          spell_dc={formInputs.spell_dc}
          spell_modifier={formInputs.spell_modifier}
          spell_slots={formInputs.spell_slots}
          handleNewSpell={handleNewSpell} />)
      case "legendary_actions":
        return (<ActionsList key="legendary actions mode"
          actions={character.legendary_actions}
          handleSubmit={handleSubmitLegendaryAction}
          handleAdd={handleAddAction} />)
      default:
        console.log("rendering nothing")
    }
  }

  return (
    <form id="character-detail-form" onSubmit={handleSubmit}>

      <DetailImage charType={formInputs.type} />

      <span>Player? <input type="checkbox" name="player" onChange={handleChange} checked={formInputs.player} /></span>

      {formInputs.player ?
        <span>Class: <CharacterSelectField
          name="char_class"
          options={["Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Rogue","Ranger","Sorcerer","Warlock","Wizard"]}
          handleChange={handleChange}
          currentInput={formInputs["char_class"]} />
        </span>
        : <a href={`https://www.dndbeyond.com/monsters/${character.formatted_index}`} target="_blank"><img id="beyond-icon" src={beyondIcon} alt="DnD Beyond" /></a> }


      <div id="detail-mode-tab">

        <input type="button" value={"General"} name="general" onClick={handleChangeDetailMode} />
        <input type="button" value={"Actions"} name="actions" onClick={handleChangeDetailMode} />
        <input type="button" value={"Special Abilities"} name="special_abilities" onClick={handleChangeDetailMode} />
        <input type="button" value={"Spells"} name="spells" style={formInputs.spells.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />
        <input type="button" value={"Legendary Actions"} name="legendary_actions" style={formInputs.legendary_actions.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />

      </div>

      <br/>

      {renderDetailMode()}

      <input id="save-local-character-button" type="button" value="Save to Storage" onClick={handleSaveToStorage} />

    </form>
  )

}

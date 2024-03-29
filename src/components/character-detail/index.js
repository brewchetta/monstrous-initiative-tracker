// REACT //
import { useState, useEffect } from "react"
// import useLocalStorageList from 'services/localstorage'
import { useCharactersContext } from "context/characters-context"
// COMPONENTS //
import ActionsList from './ActionsList/'
import SpellsList from './SpellsList/'
import GeneralInfo from './GeneralInfo/'
import CharacterSelectField from './Inputs/CharacterSelectField'
import DetailImage from './DetailImage'
import Download from './Download'
// STYLE //
import "./CharacterDetailCard.css"
import beyondIcon from "assets/images/beyond-icon.png"

export default function CharacterDetailCard({character, spellNames}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)
  const [detailMode, setDetailMode] = useState("general")

  const updateCharacter = useCharactersContext().update

  // const saveMonster = useLocalStorageList('monstrous-characters')[3]

  useEffect(() => {
    updateCharacter(formInputs)
    return updateCharacter(formInputs)
    // eslint-disable-next-line
  }, [formInputs])

  // EVENT HANDLERS

  const handleChange = event => {
    const {target} = event
    const value = target.type === "number" ? parseInt(target.value)
    : target.type === "checkbox" ? target.checked
    : target.value
    setFormInputs({...formInputs, ...{[event.target.name]: value}})
  }

  const handleSetSpellSlots = (slots, level) => {
    const spell_slots = {...formInputs.spell_slots, [level]: slots.slice(0,10)}
    setFormInputs({...formInputs, spell_slots})
  }

  const handleNewSpell = newSpell => {
    setFormInputs(Object.assign(formInputs, { spells: [...formInputs.spells, newSpell] }))
    handleSubmit()
  }

  const handleRemoveSpell = spell => {
    setFormInputs(Object.assign(formInputs, { spells: formInputs.spells.filter(sp => sp !== spell) }))
    handleSubmit()
  }

  const handleAddAction = () => {
    const actions = formInputs[detailMode]
    setFormInputs(Object.assign(formInputs, { [detailMode]: [...actions, {id: actions[actions.length - 1].id + 1, full_description: `Name: Description Here`}] }))
    handleSubmit()
  }

  function handleSubmit(e) {
    e && e.preventDefault()
    updateCharacter(formInputs)
  }

  // const handleSaveToStorage = () => saveMonster(formInputs)

  const handleChangeDetailMode = e => setDetailMode(e.target.name)

  const handleSubmitAction = (description, action) => {
    const actions = description.length ?
    formInputs[detailMode].map(a => (
      a === action ? {...a, full_description: description} : a
    ))
    :
    formInputs[detailMode].filter(a => a !== action)
    setFormInputs({...formInputs, [detailMode]: actions})
    handleSubmit()
  }

  // RENDER METHODS //

  const renderDetailMode = () => {
    switch (detailMode) {
      case "general":
        return <GeneralInfo formInputs={formInputs} handleChange={handleChange} handleSubmit={handleSubmit} />
      case "actions":
        return (<ActionsList key="actions mode"
          actions={formInputs.actions}
          handleSubmit={handleSubmitAction}
          handleAdd={handleAddAction} />)
      case "special_abilities":
        return (<ActionsList key="special abilities mode"
          actions={formInputs.special_abilities}
          handleSubmit={handleSubmitAction}
          handleAdd={handleAddAction} />)
      case "spells":
        return (<SpellsList key="spells mode"
          spells={formInputs.spells}
          spell_dc={formInputs.spell_dc}
          spell_modifier={formInputs.spell_modifier}
          spell_slots={formInputs.spell_slots}
          handleNewSpell={handleNewSpell}
          handleRemoveSpell={handleRemoveSpell}
          handleChange={handleChange}
          handleSetSpellSlots={handleSetSpellSlots}
          spellNames={spellNames} />)
      case "legendary_actions":
        return (<ActionsList key="legendary actions mode"
          actions={formInputs.legendary_actions}
          handleSubmit={handleSubmitAction}
          handleAdd={handleAddAction} />)
      default:
        console.log("rendering nothing")
    }
  }

  return (
    <div id="character-detail-form" spellCheck="false">

      <DetailImage charType={formInputs.type} />

      <span>Player? <input type="checkbox" name="player" onChange={handleChange} checked={formInputs.player} /></span>

      {formInputs.player ?
        <span>Class: <CharacterSelectField
          name="char_class"
          options={["Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Rogue","Ranger","Sorcerer","Warlock","Wizard"]}
          handleChange={handleChange}
          currentInput={formInputs["char_class"]} />
        </span>
        : <a href={`https://www.dndbeyond.com/monsters/${character.formatted_index}`} rel="noreferrer" target="_blank"><img id="beyond-icon" src={beyondIcon} alt="DnD Beyond" /></a> }


      <div id="detail-mode-tab">

        <input type="button" value={"General"} name="general" onClick={handleChangeDetailMode} />
        <input type="button" value={"Actions"} name="actions" onClick={handleChangeDetailMode} />
        <input type="button" value={"Special Abilities"} name="special_abilities" style={formInputs.special_abilities.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />
        <input type="button" value={"Spells"} name="spells" style={formInputs.spells.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />
        <input type="button" value={"Legendary Actions"} name="legendary_actions" style={formInputs.legendary_actions.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />

      </div>

      <br/>

      {renderDetailMode()}

      { /* <input id="save-local-character-button" type="button" value="Save to Storage" onClick={handleSaveToStorage} /> */ }
      <Download character={formInputs} />

    </div>
  )

}

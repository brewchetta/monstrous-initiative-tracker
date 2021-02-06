// REACT //
import { useState, useEffect } from "react"
import { saveMonster } from '../../services/localstorage'
// COMPONENTS //
import CharacterDetailActionsList from './CharacterDetailActionsList'
import CharacterDetailSpellsList from './CharacterDetailSpellsList'
import CharacterDetailGeneral from './CharacterDetailGeneral'
import CharacterSelectField from './CharacterSelectField'
import CharacterDetailImage from './CharacterDetailImage'
// STYLE //
import "./CharacterDetailCard.css"

export default function CharacterDetailCard({character, updateCharacter}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)
  const [detailMode, setDetailMode] = useState("general")

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

  const handleSubmit = e => {
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
      })
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
      })
    }
    setFormInputs(Object.assign(formInputs, legendary_actions))
  }

  // RENDER METHODS //

  const renderDetailMode = () => {
    switch (detailMode) {
      case "general":
        return <CharacterDetailGeneral formInputs={formInputs} handleChange={handleChange} />
      case "actions":
        return (<CharacterDetailActionsList key="actions mode"
          actions={character.actions}
          handleSubmit={handleSubmitAction} />)
      case "specials":
        return (<CharacterDetailActionsList key="special abilities mode"
          actions={character.special_abilities}
          handleSubmit={handleSubmitSpecialAbility} />)
      case "spells":
        return (<CharacterDetailSpellsList key="spells mode"
          spells={formInputs.spells}
          spell_dc={formInputs.spell_dc}
          spell_modifier={formInputs.spell_modifier}
          spell_slots={formInputs.spell_slots}
          handleNewSpell={handleNewSpell} />)
      case "legendary":
        return (<CharacterDetailActionsList key="legendary actions mode"
          actions={character.legendary_actions}
          handleSubmit={handleSubmitLegendaryAction} />)
      default:
        console.log("rendering nothing")
    }
  }

  return (
    <form id="character-detail-form" onSubmit={handleSubmit}>

      <CharacterDetailImage charType={formInputs.type} />

      <span>Player? <input type="checkbox" name="player" onChange={handleChange} checked={formInputs.player} /></span>

      {formInputs.player ?
        <span>Class: <CharacterSelectField
          name="char_class"
          options={["Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Rogue","Ranger","Sorcerer","Warlock","Wizard"]}
          handleChange={handleChange}
          currentInput={formInputs["char_class"]} />
        </span>
        : null}

      <input type="button" value="Save to Storage" onClick={handleSaveToStorage} />
      <input type="submit" value="Save"/>

      <div id="detail-mode-tab">

        <input type="button" value={"General"} name="general" onClick={handleChangeDetailMode} />
        <input type="button" value={"Actions"} name="actions" onClick={handleChangeDetailMode} />
        <input type="button" value={"Special Abilities"} name="specials" onClick={handleChangeDetailMode} />
        <input type="button" value={"Spells"} name="spells" style={formInputs.spells.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />
        <input type="button" value={"Legendary Actions"} name="legendary" style={formInputs.legendary_actions.length ? {} : {opacity: 0.5}} onClick={handleChangeDetailMode} />

      </div>

      <br/>

      {renderDetailMode()}

    </form>
  )

}

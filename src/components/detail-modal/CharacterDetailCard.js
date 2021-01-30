import { useState, useEffect } from "react"
import { saveMonster } from '../../services/localstorage'
import CharacterDetailActions from './CharacterDetailActions'
import CharacterTextArea from './CharacterTextArea'
import CharacterNumberField from './CharacterNumberField'
import "./CharacterDetailCard.css"

export default function CharacterDetailCard({character, updateCharacter}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)

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

  const handleSubmit = e => {
    e.preventDefault()
    updateCharacter(formInputs)
  }

  const handleSaveToStorage = () => saveMonster(formInputs)

  // HELPERS //

  const modifier = attribute => {
    let mod = Math.floor((formInputs[attribute] - 10) / 2)
    if (mod > 0) {
      return `+${mod}`
    }
    return mod
  }

  // RENDER METHODS //

  const renderInputField = (name) => {
    return (
      <input type="text"
      onChange={handleChange}
      name={name}
      value={formInputs[name]}
      placeholder={name.replace("_"," ")}/>
    )
  }

  const renderNumberField = (name) => {
    return (
      <input type="number"
      onChange={handleChange}
      name={name}
      value={formInputs[name]}
      placeholder={name.replace("_"," ")}/>
    )
  }

  const renderSelectField = (name, ...options) => {
    return (
      <select onChange={handleChange}
      name={name}
      value={formInputs[name]}>
        {options.map(name => <option key={name} value={name}>{name}</option>)}
      </select>
    )
  }

  console.log("TODO: Double check alignments from API")

  return (
    <form id="character-detail-form" onSubmit={handleSubmit}>
      <span>Player? <input type="checkbox" name="player" onChange={handleChange} checked={formInputs.player} /></span>

      {formInputs.player ?
        <span>{renderSelectField("char_class","","Artificer","Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Rogue","Ranger","Sorcerer","Warlock","Wizard")}</span>
        : null}<br/>

      <span>Name: {renderInputField("name")}</span>
      AC: <CharacterNumberField name="armor_class"
        value={formInputs.armor_class}
        handleChange={handleChange} />
      Initiative: <CharacterNumberField name="initiative"
        value={formInputs.initiative}
        handleChange={handleChange} />
      Max HP: <CharacterNumberField name="hit_points"
        value={formInputs.hit_points}
        handleChange={handleChange} />
      Temporary HP: <CharacterNumberField name="tempHP"
        value={formInputs.tempHP}
        handleChange={handleChange} />

      <CharacterTextArea name={"proficiencies"}
      value={formInputs.proficiencies}
      handleChange={handleChange}
      width={"80%"} height={"1.5em"} /><br/>

      <span>STR({modifier("strength")}) {renderNumberField("strength")}</span>
      <span>DEX({modifier("dexterity")}) {renderNumberField("dexterity")}</span>
      <span>CON({modifier("constitution")}) {renderNumberField("constitution")}</span>
      <span>WIS({modifier("wisdom")}) {renderNumberField("wisdom")}</span>
      <span>INT({modifier("intelligence")}) {renderNumberField("intelligence")}</span>
      <span>CHA({modifier("charisma")}) {renderNumberField("charisma")}</span><br/>

      <span>Type: {renderSelectField("type", "aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead")}</span>
      <span>Subtype: {renderInputField("subtype")}</span>
      <span>Size: {renderSelectField("size", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan")}</span><br/>
      <span>Languages: {renderInputField("languages")}</span>
      <span>Alignment: {renderSelectField("alignment", "lawful evil", "lawful neutral", "lawful good", "evil", "unaligned", "good", "chaotic evil", "chaotic neutral", "chaotic good")}</span><br/>

      <span>Hit Dice: {renderInputField("hit_dice")}</span>
      <span>Challenge Rating: {renderInputField("challenge_rating")}</span>
      <span>XP: {renderInputField("xp")}</span>

      <input type="button" value="Save to Storage" onClick={handleSaveToStorage} />
      <input type="submit" value="Save"/>

      <CharacterDetailActions actions={character.actions} />

    </form>
  )

}

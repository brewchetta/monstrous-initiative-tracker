import { useState, useEffect } from "react"
import { saveMonster } from '../../services/localstorage'
import CharacterDetailActions from './CharacterDetailActions'
import CharacterTextArea from './CharacterTextArea'
import CharacterNumberField from './CharacterNumberField'
import CharacterTextInput from './CharacterTextInput'
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
        : null}

      <input type="button" value="Save to Storage" onClick={handleSaveToStorage} />
      <input type="submit" value="Save"/>

      <br/>

      <div className="detail-sub-container">

        Name: <CharacterTextInput name="name"
          value={formInputs.name}
          handleChange={handleChange}
          width="20em" />
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

      </div>

      <div className="detail-sub-container">

        <CharacterTextArea name={"proficiencies"}
        value={formInputs.proficiencies}
        handleChange={handleChange}
        width={"80%"} height={"1.5em"} />

      </div>

      <div className="detail-sub-container">

        STR({modifier("strength")}) <CharacterNumberField name="strength"
          value={formInputs.strength}
          handleChange={handleChange} />
        DEX({modifier("dexterity")}) <CharacterNumberField name="dexterity"
          value={formInputs.dexterity}
          handleChange={handleChange} />
        CON({modifier("constitution")}) <CharacterNumberField name="constitution"
          value={formInputs.constitution}
          handleChange={handleChange} />
        WIS({modifier("wisdom")}) <CharacterNumberField name="wisdom"
          value={formInputs.wisdom}
          handleChange={handleChange} />
        INT({modifier("intelligence")}) <CharacterNumberField name="intelligence"
          value={formInputs.intelligence}
          handleChange={handleChange} />
        CHA({modifier("charisma")}) <CharacterNumberField name="charisma"
          value={formInputs.charisma}
          handleChange={handleChange} />

      </div>

      <div className="detail-sub-container">

        <span>Type: {renderSelectField("type", "aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead")}</span>
        Subtype: <CharacterTextInput name="subtype"
          value={formInputs.subtype}
          handleChange={handleChange}
          width="10em" />
        <span>Size: {renderSelectField("size", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan")}</span>
        Languages: <CharacterTextInput name="languages"
          value={formInputs.languages}
          handleChange={handleChange}
          width="20em" />

      </div>

      /* Add conditional here */

      <div className="detail-sub-container">

        <span>Alignment: {renderSelectField("alignment", "lawful evil", "lawful neutral", "lawful good", "evil", "unaligned", "good", "chaotic evil", "chaotic neutral", "chaotic good")}</span><br/>
        Hit Dice: <CharacterTextInput name="hit_dice"
          value={formInputs.hit_dice}
          handleChange={handleChange}
          width="4em" />
        Challenge Rating: <CharacterTextInput name="challenge_rating"
          value={formInputs.challenge_rating}
          handleChange={handleChange}
          width="3em" />
        XP: <CharacterTextInput name="xp"
          value={formInputs.xp}
          handleChange={handleChange}
          width="6em" />

      </div>

      <CharacterDetailActions actions={character.actions} />

    </form>
  )

}

import { useState, useEffect } from "react"
import { saveMonster } from '../../services/localstorage'
import CharacterDetailActions from './CharacterDetailActions'
import CharacterDetailSpellsList from './CharacterDetailSpellsList'
import CharacterTextArea from './CharacterTextArea'
import CharacterNumberField from './CharacterNumberField'
import CharacterTextInput from './CharacterTextInput'
import "./CharacterDetailCard.css"

export default function CharacterDetailCard({character, updateCharacter}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)
  const [detailMode, setDetailMode] = useState(false)

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

  const handleChangeDetailMode = e => setDetailMode(e.target.name)

  // HELPERS //

  const modifier = attribute => {
    let mod = Math.floor((formInputs[attribute] - 10) / 2)
    if (mod > 0) {
      return `+${mod}`
    }
    return mod
  }

  // RENDER METHODS //

  const renderSelectField = (name, ...options) => {
    return (
      <select onChange={handleChange}
      className="character-detail-select-field"
      name={name}
      value={formInputs[name]}>
        {options.map(name => <option key={name} value={name}>{name}</option>)}
      </select>
    )
  }

  const renderDetailMode = () => {
    switch (detailMode) {
      case "more":
        console.log("switching to more mode");
        return (
          <>
            <div className="detail-sub-container">

              <span>Alignment: {renderSelectField("alignment", "lawful evil", "lawful neutral", "lawful good", "neutral evil", "neutral", "neutral good", "chaotic evil", "chaotic neutral", "chaotic good", "unaligned")}</span><br/>
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
        </>
        )
      case "actions":
        console.log("switching to actions mode")
        return (<CharacterDetailActions key="actions mode"
          actions={character.actions} />)
      case "specials":
        console.log("switching to special actions mode")
        return (<CharacterDetailActions key="special abilities mode"
          actions={character.special_abilities} />)
      case "spells":
        console.log("switching to spells mode")
        return <CharacterDetailSpellsList key="spells mode"
          spells={formInputs.spells}
          spell_dc={formInputs.spell_dc}
          spell_modifier={formInputs.spell_modifier}
          spell_slots={formInputs.spell_slots} />
      case "legendary":
        console.log("switching to legendary mode")
        break;
      default:
        console.log("rendering nothing")
    }
  }

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

      <input type="button" value={"More Details"} name="more" onClick={handleChangeDetailMode} />
      <input type="button" value={"Actions"} name="actions" onClick={handleChangeDetailMode} />
      <input type="button" value={"Special Abilities"} name="specials" onClick={handleChangeDetailMode} />
      <input type="button" value={"Spells"} name="spells" style={formInputs.spells.length ? {} : {color: "grey", borderColor: "grey"}} onClick={handleChangeDetailMode} />
      <input type="button" value={"Legendary Actions"} name="legendary" onClick={handleChangeDetailMode} />

      {renderDetailMode()}

    </form>
  )

}

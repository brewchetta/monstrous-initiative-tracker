import { useContext } from 'react'
import { OptionsSettingsContext } from "../../context/options-settings-context"
import CharacterNumberField from "./CharacterNumberField"
import CharacterTextInput from "./CharacterTextInput"
import CharacterTextArea from "./CharacterTextArea"
import CharacterSelectField from "./CharacterSelectField"

export default function GeneralInfo({formInputs, handleChange, handleSubmit}) {

  // CONTEXT //

  const options = useContext(OptionsSettingsContext)[0]

  // HELPERS //

  const modifier = (attribute, multiplier=1) => {
    let mod = Math.floor((formInputs[attribute] - 10) / 2) * multiplier
    if (mod > 0) {
      return `+${mod}`
    }
    return mod
  }

  // RENDER //

  return (
    <form onSubmit={handleSubmit}>

      <div className="detail-sub-container">

        Name: <CharacterTextInput name="name"
          value={formInputs.name}
          handleChange={handleChange}
          width="20em" />

      </div>

      <div className="detail-sub-container">

        <CharacterSelectField name="size"
          options={["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"]}
          handleChange={handleChange}
          currentInput={formInputs.size} />

        <CharacterSelectField name="type"
          options={["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead"]}
          handleChange={handleChange}
          currentInput={formInputs.type} />

        <CharacterTextInput name="subtype"
          value={formInputs.subtype}
          handleChange={handleChange}
          width="10em" />

        <CharacterSelectField name="alignment"
          options={["lawful evil", "lawful neutral", "lawful good", "neutral evil", "neutral", "neutral good", "chaotic evil", "chaotic neutral", "chaotic good", "unaligned"]}
          handleChange={handleChange}
          currentInput={formInputs.alignment} />

      </div>

      <div className="detail-sub-container">

        AC: <CharacterNumberField name="armor_class"
          value={formInputs.armor_class}
          handleChange={handleChange} />
        Max HP: { options.randomHitpoints
        ? (<CharacterNumberField name="hit_points"
          value={formInputs.hit_points}
          handleChange={handleChange} />)
        : (<CharacterNumberField name="static_hitpoints"
          value={formInputs.static_hitpoints}
          handleChange={handleChange} />)
        }
        Temporary HP: <CharacterNumberField name="tempHP"
          value={formInputs.tempHP}
          handleChange={handleChange} />
        Hit Dice: <CharacterTextInput name="hit_dice"
          value={formInputs.hit_dice}
          handleChange={handleChange}
          width="4em" /> {formInputs.hit_dice.includes("d") && modifier("constitution") ? modifier("constitution", parseInt(formInputs.hit_dice.split("d")[0])) : null}

      </div>

      <div className="detail-sub-container">

        Speed: <CharacterTextInput name="speed"
          value={formInputs.speed}
          handleChange={handleChange}
          width="20em" />

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

        <CharacterTextArea name={"proficiencies"}
        value={formInputs.proficiencies}
        handleChange={handleChange}
        width={"80%"} />

      </div>

      <div className="detail-sub-container">

        <label>Condition Immunities: </label>
        <CharacterTextArea name={"condition_immunities"}
        value={formInputs.condition_immunities}
        handleChange={handleChange}
        width={"60%"} height={"1em"} />

      </div>

      <div className="detail-sub-container">

        <label>Damage Resistances: </label>
        <CharacterTextArea name={"damage_resistances"}
        value={formInputs.damage_resistances}
        handleChange={handleChange}
        width={"60%"} height={"1em"} />

      </div>

      <div className="detail-sub-container">

        <label>Damage Immunities: </label>
        <CharacterTextArea name={"damage_immunities"}
        value={formInputs.damage_immunities}
        handleChange={handleChange}
        width={"60%"} height={"1em"} />

      </div>

      <div className="detail-sub-container">

        <label>Damage Vulnerabilities: </label>
        <CharacterTextArea name={"damage_vulnerabilities"}
        value={formInputs.damage_vulnerabilities}
        handleChange={handleChange}
        width={"60%"} height={"1em"} />

      </div>

      <div className="detail-sub-container">

        Languages: <CharacterTextInput name="languages"
          value={formInputs.languages}
          handleChange={handleChange}
          width="60%" />

      </div>

      <div className="detail-sub-container">

        Challenge Rating: <CharacterTextInput name="challenge_rating"
          value={formInputs.challenge_rating}
          handleChange={handleChange}
          width="3em" />
        XP: <CharacterTextInput name="xp"
          value={formInputs.xp}
          handleChange={handleChange}
          width="6em" />

      </div>

    </form>
  )

}

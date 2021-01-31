import CharacterNumberField from "./CharacterNumberField"
import CharacterTextInput from "./CharacterTextInput"
import CharacterTextArea from "./CharacterTextArea"
import CharacterSelectField from "./CharacterSelectField"

export default function CharacterDetailGeneral({formInputs, handleChange}) {

  // HELPERS //

  const modifier = attribute => {
    let mod = Math.floor((formInputs[attribute] - 10) / 2)
    if (mod > 0) {
      return `+${mod}`
    }
    return mod
  }

  // RENDER //

  return (
    <>
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

        <span>Alignment: <CharacterSelectField name="alignment"
          options={["lawful evil", "lawful neutral", "lawful good", "neutral evil", "neutral", "neutral good", "chaotic evil", "chaotic neutral", "chaotic good", "unaligned"]}
          handleChange={handleChange}
          currentInput={formInputs.alignment} />
        </span>
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

      <span>Type: <CharacterSelectField name="type"
        options={["aberration", "beast", "celestial", "construct", "dragon", "elemental", "fey", "fiend", "giant", "humanoid", "monstrosity", "ooze", "plant", "undead"]}
        handleChange={handleChange}
        currentInput={formInputs.type} />
      </span>

      Subtype: <CharacterTextInput name="subtype"
        value={formInputs.subtype}
        handleChange={handleChange}
        width="10em" />

      <span>Size: <CharacterSelectField name="size"
        options={["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"]}
        handleChange={handleChange}
        currentInput={formInputs.size} />
      </span>

      Languages: <CharacterTextInput name="languages"
        value={formInputs.languages}
        handleChange={handleChange}
        width="20em" />

    </div>
  </>
  )

}

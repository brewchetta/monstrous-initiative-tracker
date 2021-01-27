import { useState } from "react"

export default function CharacterDetailCard({character, updateCharacter}) {

  // STATE //

  const [formInputs, setFormInputs] = useState(character)

  // EVENT HANDLERS

  const handleChange = event => {
    const value = event.target.type === "number" ? parseInt(event.target.value) : event.target.value
    setFormInputs({...formInputs, ...{[event.target.name]: value}})
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateCharacter(formInputs)
  }

  // HELPERS //

  const modifier = attribute => Math.floor((formInputs[attribute] - 10) / 2)

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

  return (
    <form id="character-detail-form" onSubmit={handleSubmit}>
      <span>Name: {renderInputField("name")}</span>
      <span>AC: {renderNumberField("armor_class")}</span>
      <span>Initiative: {renderNumberField("initiative")}</span>
      <span>Max Hit Points: {renderNumberField("hit_points")}</span><br/>
      <span>STR {renderNumberField("strength")}({modifier("strength")})</span>
      <span>DEX {renderNumberField("dexterity")}({modifier("dexterity")})</span>
      <span>CON {renderNumberField("constitution")}({modifier("constitution")})</span><br/>
      <span>WIS {renderNumberField("wisdom")}({modifier("wisdom")})</span>
      <span>INT {renderNumberField("intelligence")}({modifier("intelligence")})</span>
      <span>CHA {renderNumberField("charisma")}({modifier("charisma")})</span><br/>

      <input type="submit" value="Save"/>

    </form>
  )

}

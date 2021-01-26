import { useState } from "react"

export default function CharacterDetailCard({character}) {

  const [formInputs, setFormInputs] = useState({...character})

  // EVENT HANDLERS

  const handleChange = event => {
    setFormInputs({...formInputs, ...{[event.target.name]: event.target.value}})
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formInputs)
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
      <span>{renderInputField("name")}</span>
      <span>{renderInputField("armor_class")}</span>
      <span>{renderInputField("initiative")}</span>
      <span>STR {renderNumberField("strength")}({modifier("strength")})</span>
      <span>DEX {renderNumberField("dexterity")}({modifier("dexterity")})</span>
      <span>CON {renderNumberField("constitution")}({modifier("constitution")})</span>
      <span>WIS {renderNumberField("wisdom")}({modifier("wisdom")})</span>
      <span>INT {renderNumberField("intelligence")}({modifier("intelligence")})</span>
      <span>CHA {renderNumberField("charisma")}({modifier("charisma")})</span>

      <input type="submit" value="Save"/>

    </form>
  )

}

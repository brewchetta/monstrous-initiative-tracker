import { useState } from "react"

export default function AddSpellForm({handleSubmit}) {

  // STATE //

  const [nameInput, setNameInput] = useState("")
  const [levelInput, setLevelInput] = useState(0)

  // EVENT HANDLERS //

  const handleNameChange = e => setNameInput(e.target.value)
  const handleLevelChange = e => setLevelInput(e.target.value)

  const handleSubmitForm = e => {
    handleSubmit({name: nameInput, level: parseInt(levelInput)})
    setNameInput("")
    setLevelInput(0)
  }

  // RENDER //

  return (
    <>
    <div id="add-spell-form">
      <input type="text"
      onChange={handleNameChange}
      value={nameInput}
      placeholder={"spell name..."}
      />

      <select onChange={handleLevelChange} value={levelInput}>
        <option value={0}>Cantrip</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
      </select>

      <input type="button"
      value={"Add Spell"}
      onClick={handleSubmitForm}/>
    </div>
    </>
  )

}
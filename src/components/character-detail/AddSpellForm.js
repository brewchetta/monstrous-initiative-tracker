import { useState } from "react"

export default function AddSpellForm({handleSubmit, spellNames, spells}) {

  // STATE //

  const [nameInput, setNameInput] = useState("")
  const [levelInput, setLevelInput] = useState(0)

  const renderDatalistOptions = () => (
    spellNames.map(s => <option key={s} value={s} />)
  )

  // EVENT HANDLERS //

  const handleNameChange = e => setNameInput(e.target.value)
  const handleLevelChange = e => setLevelInput(e.target.value)

  const handleSubmitForm = e => {
    console.log("Doing stuff")
    if (!spells.find(sp => sp.name.toLowerCase() === nameInput.toLowerCase())) {
      handleSubmit({name: nameInput, level: parseInt(levelInput)})
      setNameInput("")
    }
  }

  // RENDER //

  return (
    <>
    <div id="add-spell-form" onSubmit={handleSubmitForm}>
      <input type="text"
      list="spell-names"
      onChange={handleNameChange}
      value={nameInput}
      placeholder={"spell name..."}
      />

      <datalist id="spell-names">
        {renderDatalistOptions()}
      </datalist>

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
      value={"Add Spell"}/>
    </div>
    </>
  )

}

export default function SpellSlots({spellSlots, addSlots, removeSlot, setSpellSlots}) {
  // recieves a slots prop (array) as well as an add and a remove slots prop
  // additional prop to set the spell slots and a prop for the level
  // example slots prop: [true, true, false, false] for two used slots
  // slots are per level

  const handleClickSpellSlot = (spell, i) => {
    const slots = [...spellSlots]
    slots[i] = !spell
    setSpellSlots(slots)
  }

  const renderSlots = () => {
    return spellSlots.map((spell, i) => (
      <input type="checkbox" checked={spell} onChange={() => handleClickSpellSlot(spell, i)}/>
    ))
  }

  return (
    <div id="">

      // conditionally render minus button (must already include spell slots)
      <button class={spellSlots.length > 0 ? "active slot-button" : "slot-button"} onClick={handleRemoveSlot}>-</button>

      // render spell slots with checkbox for each slot
      {renderSlots()}

      // conditionally render plus button (up to six slots)
      <button class={spellSlots.length < 6 ? "active slot-button" : "slot-button"} onClick={handleRemoveSlot}>-</button>

    </div>



  )

  // has a minus on one end which removes the slots and a plus on the other that increases
  // slots are checkboxes which persist for that character

}

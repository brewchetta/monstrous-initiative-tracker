import availabilityIcon from '../../assets/status-icons/book-cover.png'

export default function SpellSlots({spellSlots, setSpellSlots}) {

  const handleClickSpellSlot = (spell, i) => {
    const slots = [...spellSlots]
    slots[i] = !spell
    setSpellSlots(slots)
  }

  const handleAddSlot = () => {
    spellSlots.length < 7 && setSpellSlots([...spellSlots, false])
  }

  const handleRemoveSlot = () => {
    spellSlots.length > 0 && setSpellSlots(spellSlots.slice(0, spellSlots.length - 1))
  }

  const renderSlots = () => {
    return spellSlots.map((spell, i) => (
      <span className="slot-checkbox"
      onClick={() => handleClickSpellSlot(spell, i)}>
        {spell ? <img src={availabilityIcon} alt="O" /> : "•"}
      </span>
    ))
  }

  return (
    <div>

      <span>Slots </span>

      <button class={spellSlots.length > 0 ? "active slot-button" : "slot-button"} onClick={handleRemoveSlot}>-</button>

      <button class={spellSlots.length < 6 ? "active slot-button" : "slot-button"} onClick={handleAddSlot}>+</button>

      {renderSlots()}

    </div>
  )

}

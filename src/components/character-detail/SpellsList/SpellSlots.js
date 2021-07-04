import availabilityIcon from 'assets/status-icons/fluffy-cloud.png'
import unavailabilityIcon from 'assets/status-icons/fireflake.png'

export default function SpellSlots({spellSlots, setSpellSlots}) {

  const handleClickSpellSlot = (spell, i) => {
    const slots = [...spellSlots]
    slots[i] = !spell
    setSpellSlots(slots)
  }

  const handleAddSlot = () => {
    spellSlots.length < 10 && setSpellSlots([...spellSlots, false])
  }

  const handleRemoveSlot = () => {
    spellSlots.length > 0 && setSpellSlots(spellSlots.slice(0, spellSlots.length - 1))
  }

  const renderSlots = () => {
    return spellSlots.map((spell, i) => (
      <div className="slot-checkbox"
      onClick={() => handleClickSpellSlot(spell, i)}>
        {spell ? <img src={unavailabilityIcon} alt="X" /> : <img src={availabilityIcon} alt="O" />}
      </div>
    ))
  }

  return (
    <>

      <span>  </span>

      {renderSlots()}

      <br/>

      <span>Slots </span>

      <button class={spellSlots.length > 0 ? "active slot-button" : "slot-button"} onClick={handleRemoveSlot}>-</button>

      <button class={spellSlots.length < 10 ? "active slot-button" : "slot-button"} onClick={handleAddSlot}>+</button>

    </>
  )

}

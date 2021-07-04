import Spell from './Spell'
import AddSpellForm from "./AddSpellForm"
import SpellSlots from './SpellSlots'
import CharacterNumberField from '../Inputs/CharacterNumberField'

function SpellsList({spells, spell_dc, spell_modifier, spell_slots, handleNewSpell, handleRemoveSpell, handleChange, spellNames, handleSetSpellSlots}) {

  // RENDER //

  const buildSetSpellSlots = level => {
    return (slots) => handleSetSpellSlots(slots, level)
  }

  const renderSpellsByLevel = () => {
    const spellsByLevel = {}
    spells.forEach(sp => {
      spellsByLevel[sp.level] ?
      spellsByLevel[sp.level].push(<Spell spell={sp} key={sp.name} removeSpell={handleRemoveSpell} />)
      : spellsByLevel[sp.level] = [<Spell spell={sp} key={sp.name} removeSpell={handleRemoveSpell} />]
    });

    return Object.keys(spellsByLevel).map(i => (
      <div className="spell-level-container" key={`level${i}spells`}>
        <p>{parseInt(i) ? `Level ${i}` : 'Cantrips'}{i && spell_slots[i] ? <SpellSlots spellSlots={spell_slots[i]} setSpellSlots={buildSetSpellSlots(i)} /> : null}</p>
        {spellsByLevel[i]}
      </div>
    ))
  }

  return (
    <div>

      <span>
      Spell Modifier: <CharacterNumberField name="spell_dc"
        value={spell_dc}
        handleChange={handleChange} />

      Spell DC: <CharacterNumberField name="spell_modifier"
        value={spell_modifier}
        handleChange={handleChange} />
      </span>

      <br/>
      <br/>

      <AddSpellForm handleSubmit={handleNewSpell} spellNames={spellNames} spells={spells} />

      <br/>

      {renderSpellsByLevel()}

      <br/>

    </div>
  )

}

export default SpellsList

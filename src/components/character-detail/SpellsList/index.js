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
    const levelsArray = []
    for (var i = 0; i <= 9; i++) {

      const levelSpells = spells
        .filter(sp => sp.level === i)
        .map(sp => <Spell spell={sp} key={sp.name} removeSpell={handleRemoveSpell} />)

      levelSpells.length && levelsArray.push(
        <div className="spell-level-container" key={`level${i}spells`}>
          <p>{i ? `Level ${i}` : 'Cantrips'}{i && spell_slots[i] ? <SpellSlots spellSlots={spell_slots[i]} setSpellSlots={buildSetSpellSlots(i)} /> : null}</p>
          {levelSpells}
        </div>
      )

    }
    return levelsArray
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

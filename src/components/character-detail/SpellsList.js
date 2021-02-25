import Spell from './Spell'
import AddSpellForm from "./AddSpellForm"

function SpellsList({spells, spell_dc, spell_modifier, spell_slots, handleNewSpell, handleRemoveSpell, spellNames}) {

  // RENDER //

  const renderSpellsByLevel = () => {
    const levelsArray = []
    for (var i = 0; i <= 9; i++) {

      const levelSpells = spells
        .filter(sp => sp.level === i)
        .map(sp => <Spell spell={sp} key={sp.name} removeSpell={handleRemoveSpell} />)

      levelSpells.length && levelsArray.push(
        <div className="spell-level-container" key={`level${i}spells`}>
          <p>{i ? `Level ${i}` : 'Cantrips'}{i && spell_slots && spell_slots[i] ? ` | Slots ${spell_slots[i]}` : null}</p>
          {levelSpells}
        </div>
      )

    }
    return levelsArray
  }

  return (
    <div>

      <span>{spell_modifier ? `Spell Modifier: +${spell_modifier}` : null}</span> <span>{spell_dc ? `Spell DC: ${spell_dc}` : null}</span>

      <br/>

      <AddSpellForm handleSubmit={handleNewSpell} spellNames={spellNames} />

      <br/>

      {renderSpellsByLevel()}

      <br/>

    </div>
  )

}

export default SpellsList

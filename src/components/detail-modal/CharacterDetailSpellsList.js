export default function CharacterDetailSpellsList({spells, spell_dc, spell_modifier, spell_slots}) {

  const renderSpellsByLevel = () => {
    const levelsArray = []
    for (var i = 0; i <= 9; i++) {

      const levelSpells = spells
        .filter(sp => sp.level === i)
        .map(sp => <span className="spell-span" key={sp.name}>{sp.name}</span>)

      levelSpells.length && levelsArray.push(
        <div key={`level${i}spells`}>
          <p>{i ? `Level ${i}` : 'Cantrips'}{i && spell_slots ? ` | Slots: ${spell_slots[i]}` : null}</p>
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

      {renderSpellsByLevel()}

    </div>
  )

}

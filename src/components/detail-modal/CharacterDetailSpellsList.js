export default function CharacterDetailSpellsList({spells, spell_dc, spell_modifier, spell_slots}) {

  const renderSpellsByLevel = () => {
    const levelsArray = []
    for (var i = 0; i <= 9; i++) {

      const levelSpells = spells
        .filter(sp => sp.level === i)
        .map(sp => <span key={sp.name}>{sp.name}</span>)

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

      <span>Spell Modifier: {spell_modifier > 0 ? `+${spell_modifier}` : spell_modifier}</span> <span>Spell DC: {spell_dc}</span>

      <br/>

      {renderSpellsByLevel()}

    </div>
  )

}

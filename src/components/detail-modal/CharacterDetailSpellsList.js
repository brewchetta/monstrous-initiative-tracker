export default function CharacterDetailSpellsList({spells, spell_dc, spell_modifier}) {

  const renderSpells = () => {
    return (
      spells
      .sort((a,b) => a.level - b.level)
      .map(sp => <><span key={sp.name}>{sp.name} | Level {sp.level}</span><br/></>)
    )
  }

  return (
    <div>

      <span>Spell Modifier: {spell_modifier > 0 ? `+${spell_modifier}` : spell_modifier}</span> <span>Spell DC: {spell_dc}</span>

      <br/>

      {renderSpells()}

    </div>
  )

}

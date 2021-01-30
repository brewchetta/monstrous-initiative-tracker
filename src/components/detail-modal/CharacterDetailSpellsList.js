export default function CharacterDetailSpellsList({spells, spell_dc, spell_modifier}) {

  const renderSpells = () => {
    spells.sort((a,b) => b.level - a.level).map(sp => `${sp.name} | Level ${sp.level}`)
  }

  return (
    <div>

      <span>Spell Modifier: {spell_modifier > 0 ? `+${spell_modifier}` : spell_modifier}</span>

      <span>Spell DC: {spell_dc}</span>

      {renderSpells()}

    </div>
  )

}

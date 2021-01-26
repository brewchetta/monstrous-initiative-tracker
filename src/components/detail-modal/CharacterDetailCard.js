export default function CharacterDetailCard({character}) {

  return (
    <>
      <p>{character.name}</p>
      <p>{character.armor_class} AC</p>
      {character.initiative ? <p>{character.initiative} Initiative</p> : null}
      <p>STR {character.strength}({character.str})</p>
      <p>DEX {character.dexterity}({character.dex})</p>
      <p>CON {character.constitution}({character.con})</p>
      <p>WIS {character.wisdom}({character.wis})</p>
      <p>INT {character.intelligence}({character.int})</p>
      <p>CHA {character.charisma}({character.cha})</p>
    </>
  )

}

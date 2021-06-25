export default function SelectLocalMonstersCard({character, removeLocalMonster, addCharacter}) {

  const handleAddMonster = () => {
    addCharacter(character)
  }

  return (
    <div className="local-character-card">
      <button onClick={() => removeLocalMonster(character)}>Delete</button>
      <button onClick={handleAddMonster}>{character.name}{character.char_class ? ` the ${character.char_class}` : ""}</button>
      <br/>
    </div>
  )
}

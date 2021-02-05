export default function SelectLocalMonstersCard({character, removeLocalMonster, addCharacter}) {

  const handleAddMonster = () => {
    addCharacter(character)
  }

  return (
    <div className="local-character-card">
      <button onClick={handleAddMonster}>+</button>
      <button onClick={() => removeLocalMonster(character)}>Remove</button>
      {character.name}{character.char_class ? ` the ${character.char_class}` : ""}
    </div>
  )
}

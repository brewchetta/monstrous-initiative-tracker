function SelectLocalMonstersCard({character, removeLocalMonster, addCharacter}) {

  const handleAddMonster = () => {
    addCharacter(character)
  }

  return (
    <div class="local-character-card"
    onClick={handleAddMonster}>
      {character.name}{character.char_class ? ` the ${character.char_class}` : ""}
      <button onClick={() => removeLocalMonster(character)}>Remove</button>
    </div>
  )
}

function SelectLocalMonstersCard({character}) {

  const handleClick = () => {
    console.log(character)
  }

  return (
    <div class="local-character-card"
    onClick={handleClick}>
      {character.name}{character.char_class ? ` the ${character.char_class}` : ""}
    </div>
  )
}

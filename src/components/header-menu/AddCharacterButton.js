import { useDetailContext } from "context/detail-context"
import { useCharactersContext } from "context/characters-context"
import Character from 'models/Character'

export default function AddCharacterButton(props) {

  const {inspectCharacter} = useDetailContext()
  const addCharacter = useCharactersContext().add

  const handleClick = () => {
    const newChar = Character.createTemplate()
    inspectCharacter(newChar)
    addCharacter(newChar)
  }

  return (
    <button onClick={handleClick}>
      Create New Character
    </button>
  )

}

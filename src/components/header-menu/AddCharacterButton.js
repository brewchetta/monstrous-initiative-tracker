import { useContext } from "react"
import { DetailContext } from "context/detail-context"
import { useCharactersContext } from "context/characters-context"
import Character from 'models/Character'

export default function AddCharacterButton(props) {

  const dispatchDetail = useContext(DetailContext)[1]
  const addCharacter = useCharactersContext().add

  const handleClick = () => {
    const newChar = Character.createTemplate()
    dispatchDetail({type: "INSPECT_CHARACTER", payload: newChar})
    addCharacter(newChar)
  }

  return (
    <button onClick={handleClick}>
      Create New Character
    </button>
  )

}

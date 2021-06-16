import { useContext } from "react"
import { DetailContext } from "context/detail-context"
import { CharactersContext } from "context/characters-context"
import Character from 'models/Character'

export default function AddCharacterButton(props) {

  const dispatchDetail = useContext(DetailContext)[1]
  const dispatchCharacter = useContext(CharactersContext)[1]

  const handleClick = () => {
    const newChar = Character.createTemplate()
    dispatchDetail({type: "INSPECT_CHARACTER", payload: newChar})
    dispatchCharacter({type: "ADD_CHARACTER", payload: newChar})
  }

  return (
    <button onClick={handleClick}>
      Create New Character
    </button>
  )

}

import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"
import { CharactersContext } from "../../context/characters-context"
import Character from '../../models/Character'

export default function AddCharacterButton(props) {

  const [detail, dispatchDetail] = useContext(DetailContext)
  const [characters, dispatchCharacter] = useContext(CharactersContext)

  const handleClick = () => {
    const newChar = Character.createTemplate()
    dispatchDetail({type: "INSPECT_CHARACTER", payload: newChar})
    dispatchCharacter({type: "ADD_CHARACTER", payload: newChar})
  }

  return (
    <button style={{position: "absolute", left: 0}}
    onClick={handleClick}>
      Create New Character
    </button>
  )

}

import { CharactersContext } from "../../context/characters-context.js"
import { useContext } from "react"

export default function ClearCharactersButton() {

  const dispatch = useContext(CharactersContext)[1]

  return (
    <button style={{position: "absolute", left: 0, top: "10em"}}
    onClick={() => dispatch({type: "CLEAR_CHARACTERS"})}>
      Clear Characters
    </button>
  )

}

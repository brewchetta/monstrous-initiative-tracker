import { CharactersContext } from "../../context/characters-context.js"
import { useContext } from "react"

export default function ResetInitiativesButton() {

  const dispatch = useContext(CharactersContext)[1]

  return (
    <button style={{position: "absolute", left: 0, top: "6em"}}
    onClick={() => dispatch({type: "RESET_INITIATIVES"})}>
      Clear Initiatives
    </button>
  )

}

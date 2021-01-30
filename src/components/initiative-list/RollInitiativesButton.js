import { CharactersContext } from "../../context/characters-context.js"
import { useContext } from "react"

export default function RollInitiativesButton() {

  const dispatch = useContext(CharactersContext)[1]

  return (
    <button onClick={() => dispatch({type: "ROLL_UNROLLED_INITIATIVES"})}>
      Roll Unrolled Initiatives
    </button>
  )

}

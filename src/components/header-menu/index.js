// CONTEXT
import { useContext } from 'react'
import { CharactersContext } from 'context/characters-context'
import { DetailContext } from 'context/detail-context'
// COMPONENTS
import ContextActionButton from "./ContextActionButton"
import AddCharacterButton from "./AddCharacterButton"
// STYLE
import "./HeaderMenu.css"

export default function HeaderMenu() {

  const [characters] = useContext(CharactersContext)

  const determineOpacity = () => characters.length ? ({opacity: 1}) : ({opacity: 0})

  return (
    <div id="context-buttons">

      <div id="context-buttons-left" style={determineOpacity()}>

        <ContextActionButton context={CharactersContext}
        text={"Clear Characters"}
        type={"CLEAR_CHARACTERS"} />
        <ContextActionButton context={CharactersContext}
        text={"Roll Unrolled Initiatives"}
        type={"ROLL_UNROLLED_INITIATIVES"} />
        <ContextActionButton context={CharactersContext}
        text={"Clear All Initiatives"}
        type={"RESET_INITIATIVES"} />

      </div>

      <div id="context-buttons-right">

        <ContextActionButton context={DetailContext}
        text={"Search Monster Manual"}
        type={"SEARCH"} />
        <AddCharacterButton />
        <ContextActionButton context={DetailContext}
        text={"Saved Characters"}
        type={"LOCAL_CHARACTERS"} />

      </div>


    </div>
  )

}

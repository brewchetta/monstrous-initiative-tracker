// CONTEXT
import { useCharactersContext } from 'context/characters-context'
import { DetailContext } from 'context/detail-context'
// COMPONENTS
import ContextActionButton from "./ContextActionButton"
import AddCharacterButton from "./AddCharacterButton"
// STYLE
import "./HeaderMenu.css"

export default function HeaderMenu() {

  const characters = useCharactersContext()

  const determineOpacity = () => characters.all.length ? ({opacity: 1}) : ({opacity: 0})

  return (
    <div id="context-buttons">

      <div id="context-buttons-left" style={determineOpacity()}>

      <p>I am here</p>

        <ContextActionButton
        text={"Clear Characters"}
        action={characters.clear} />
        <ContextActionButton
        text={"Roll Unrolled Initiatives"}
        action={characters.rollInitiatives} />
        <ContextActionButton
        text={"Clear All Initiatives"}
        action={characters.resetInitiatives} />

      </div>

      {/* <div id="context-buttons-right">

        <ContextActionButton context={DetailContext}
        text={"Search Monster Manual"}
        type={"SEARCH"} />
        <AddCharacterButton />
        <ContextActionButton context={DetailContext}
        text={"Saved Characters"}
        type={"LOCAL_CHARACTERS"} />

      </div>} */}


    </div>
  )

}

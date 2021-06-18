// CONTEXT
import { useCharactersContext } from 'context/characters-context'
import { useDetailContext } from 'context/detail-context'
// COMPONENTS
import ContextActionButton from "./ContextActionButton"
import AddCharacterButton from "./AddCharacterButton"
// STYLE
import "./HeaderMenu.css"

export default function HeaderMenu() {

  const characters = useCharactersContext()
  const detail = useDetailContext()

  const determineOpacity = () => characters.all.length ? ({opacity: 1}) : ({opacity: 0})

  return (
    <div id="context-buttons">

      <div id="context-buttons-left" style={determineOpacity()}>

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

      <div id="context-buttons-right">

        <ContextActionButton
        text={"Search Monster Manual"}
        action={detail.searchMonster} />
        <AddCharacterButton />
        <ContextActionButton
        text={"Search Spells"}
        action={detail.searchSpell} />
        <ContextActionButton
        text={"Saved Characters"}
        action={detail.localCharacters} />

      </div>


    </div>
  )

}

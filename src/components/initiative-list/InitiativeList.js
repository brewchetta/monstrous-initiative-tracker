// CONTEXT
import { useContext } from 'react'
import { CharactersContext } from '../../context/characters-context'
import { DetailContext } from '../../context/detail-context'
// COMPONENTS //
import InitiativeCard from './InitiativeCard'
import AddCharacterButton from './AddCharacterButton'
import ContextActionButton from "./ContextActionButton"
// STYLE //
import "./InitiativeList.css"

export default function InitiativeList(props) {

  // CONTEXT //
  const [characters, dispatch] = useContext(CharactersContext)
  const updateCharacter = character => dispatch({type: "UPDATE_CHARACTER", payload: character})

  // list and card doesn't update when character updates...
  const renderListedCharacters = () => {
    return characters.map((c, index) => <InitiativeCard key={c._key} character={c} index={index} updateCharacter={updateCharacter} />)
  }

  return (
    <>

      <div id="context-buttons">

        <AddCharacterButton />
        <ContextActionButton context={DetailContext}
          text={"Search Monster Manual"}
          type={"SEARCH"} />
        <ContextActionButton context={CharactersContext}
          text={"Clear All Initiatives"}
          type={"RESET_INITIATIVES"} />
        <ContextActionButton context={DetailContext}
          text={"Saved Characters"}
          type={"LOCAL_CHARACTERS"} />
        <ContextActionButton context={CharactersContext}
          text={"Roll Unrolled Initiatives"}
          type={"ROLL_UNROLLED_INITIATIVES"} />
        <ContextActionButton context={CharactersContext}
          text={"Clear Characters"}
          type={"CLEAR_CHARACTERS"} />

      </div>

      <div id="initiative-list">

        {renderListedCharacters()}

      </div>

    </>
  )

}

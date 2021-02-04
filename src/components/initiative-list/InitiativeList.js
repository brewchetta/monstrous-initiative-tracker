// CONTEXT
import { useContext } from 'react'
import { CharactersContext } from '../../context/characters-context'
import { DetailContext } from '../../context/detail-context'
// COMPONENTS //
import InitiativeCard from './InitiativeCard'
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

      <div id="initiative-list">

        {renderListedCharacters()}

      </div>

  )

}

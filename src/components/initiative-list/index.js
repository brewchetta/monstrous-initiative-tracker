// CONTEXT
import { useContext } from 'react'
import { useCharactersContext } from 'context/characters-context'
// COMPONENTS //
import InitiativeCard from './InitiativeCard'
// STYLE //
import "./InitiativeList.css"

export default function InitiativeList(props) {

  // CONTEXT //
  const characters = useCharactersContext()

  // list and card doesn't update when character updates...
  const renderListedCharacters = () => {
    return characters.all.map((c, index) => <InitiativeCard key={c._key} character={c} index={index} updateCharacter={characters.update} />)
  }

  return (

      <div id="initiative-list">

        {renderListedCharacters()}

      </div>

  )

}

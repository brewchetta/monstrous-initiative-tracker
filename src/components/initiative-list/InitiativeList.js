import { useContext } from 'react'
import InitiativeCard from './InitiativeCard'
import AddCharacterButton from './AddCharacterButton'
import SearchButton from './SearchButton'
import LocalCharactersButton from './LocalCharactersButton'
import ResetInitiativesButton from './ResetInitiativesButton'
import RollInitiativesButton from './RollInitiativesButton'
import ClearCharactersButton from './ClearCharactersButton'
import { CharactersContext } from '../../context/characters-context'
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
        <SearchButton />
        <ResetInitiativesButton />
        <LocalCharactersButton />
        <RollInitiativesButton />
        <ClearCharactersButton />

      </div>

      <div id="initiative-list">

        {renderListedCharacters()}

      </div>

    </>
  )

}

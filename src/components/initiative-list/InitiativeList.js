import { useEffect, useContext } from 'react'
import { getMonster } from '../../services/dnd-5e-api'
import Character from '../../models/Character'
import InitiativeCard from './InitiativeCard'
import { CharactersContext } from '../../context/characters-context'

const monsterNames = ["vampire", "goblin", "merfolk"]

export default function InitiativeList(props) {

  // CONTEXT //
  const [characters, dispatch] = useContext(CharactersContext)
  const addCharacter = character => dispatch({type: "ADD_CHARACTER", payload: character})
  const updateCharacter = character => dispatch({type: "UPDATE_CHARACTER", payload: character})

  // TESTING //
  const getMonsterFromList = () => {
    if (monsterNames.length) {
      getMonster(monsterNames.pop()).then(monster => addCharacter(new Character(monster)))
    }
  }
  useEffect(getMonsterFromList, [characters])

  // list and card doesn't update when character updates...
  const renderListedCharacters = () => {
    return characters.map((c, index) => <InitiativeCard key={c._key} character={c} index={index} updateCharacter={updateCharacter} />)
  }

  return (
    <div id="initative-list">

      {renderListedCharacters()}

    </div>
  )

}

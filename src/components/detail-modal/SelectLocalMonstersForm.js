import { useState, useContext } from "react"
import { CharactersContext } from "../../context/characters-context"
// import Character from '../../models/Character.js'
import SelectLocalMonstersCard from './SelectLocalMonstersCard'

export default function SelectLocalMonstersForm() {

  // STATE //
  const [locals, setLocals] = useState([])
  const dispatch = useContext(CharactersContext)[1]

  const initializeLocals = () => {
    setLocals(localMonsters())
  }

  useEffect(initializeLocals, [])

  const addCharacter = character => {
    dispatch({type: "ADD_CHARACTER", payload: new Character(character)})
  }

  // LOCAL STORAGE //

  const removeLocalMonster = monster => {
    // TODO: STUFF HERE
    console.log("do stuff")
  }

  const localMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))

  const clearLocalMonsters = () => localStorage.removeItem("monstrous-characters")

  // RENDER //

  const renderLocalMonsters = () => {
    locals.map(char => <SelectLocalMonstersCard character={char} removeLocalMonster={removeLocalMonster} addCharacter={addCharacter} />)
  }

  return (
    <div id="local-character-selection">

      {renderLocalMonsters()}

      <button onClick={clearLocalMonsters}>Remove All</button>

    </div>
  )

}

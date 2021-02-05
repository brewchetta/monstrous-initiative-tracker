import { useState, useContext, useEffect } from "react"
import { getMonsters, setMonsters, clearMonsters } from "../../services/localstorage"
import { CharactersContext } from "../../context/characters-context"
import Character from '../../models/Character.js'
import SelectLocalMonstersCard from './SelectLocalMonstersCard'

export default function SelectLocalMonstersForm() {

  // STATE //
  const [locals, setLocals] = useState([])
  const dispatch = useContext(CharactersContext)[1]

  useEffect(() => { setLocals(getMonsters() || []) }, [])

  const addCharacter = character => {
    dispatch({type: "ADD_CHARACTER", payload: new Character(character)})
  }

  const clearLocals = () => {
    clearMonsters()
    setLocals([])
  }

  // LOCAL STORAGE //

  const removeLocalMonster = monster => {
    const newLocals = locals.filter(m => m !== monster)
    setMonsters(newLocals)
    setLocals(newLocals)
  }

  // RENDER //

  const renderLocalMonsters = () => {
    return locals.map((char, i) => <SelectLocalMonstersCard key={i}
      character={char}
      removeLocalMonster={removeLocalMonster}
      addCharacter={addCharacter} />)
  }

  return (
    <div id="local-character-selection">

      {renderLocalMonsters()}

      <button onClick={clearLocals}>Remove All</button>

    </div>
  )

}

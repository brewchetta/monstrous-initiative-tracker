import { useState, useContext, useEffect } from "react"
import useLocalStorage from "../../services/localstorage"
import { CharactersContext } from "../../context/characters-context"
import Character from '../../models/Character.js'
import SelectLocalMonstersCard from './SelectLocalMonstersCard'

export default function SelectLocalMonstersForm() {

  // STATE //
  const [locals, setLocals] = useState([])
  const dispatch = useContext(CharactersContext)[1]

  const [getMonsters, setMonsters, clearMonsters] = useLocalStorage('monstrous-characters')

  useEffect(() => { setLocals(getMonsters() || []) }, [getMonsters])

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

      <button id="remove-all-locals" onClick={clearLocals}>Clear All</button>

    </div>
  )

}
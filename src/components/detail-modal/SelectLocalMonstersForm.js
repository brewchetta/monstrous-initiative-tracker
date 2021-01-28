import { useState, useContext, useEffect } from "react"
import { CharactersContext } from "../../context/characters-context"
import Character from '../../models/Character.js'
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
    const newLocals = locals.filter(m => m !== monster)
    localStorage.setItem("monstrous-characters", JSON.stringify(newLocals))
    setLocals(newLocals)
  }


  const localMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))

  const clearLocalMonsters = () => localStorage.removeItem("monstrous-characters")

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

      <button onClick={clearLocalMonsters}>Remove All</button>

    </div>
  )

}

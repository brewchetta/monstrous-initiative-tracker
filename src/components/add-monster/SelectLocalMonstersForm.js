import { useState, useEffect } from "react"
import useLocalStorage from "services/localstorage"
import { useCharactersContext } from "context/characters-context"
import Character from 'models/Character.js'
import SelectLocalMonstersCard from './SelectLocalMonstersCard'

export default function SelectLocalMonstersForm() {

  // STATE //
  const [locals, setLocals] = useState(null)
  const characters = useCharactersContext()

  const [getMonsters, setMonsters, clearMonsters] = useLocalStorage('monstrous-characters')

  useEffect(() => {
    !locals && setLocals(getMonsters() || [])
  }, [locals, getMonsters])

  const addCharacter = character => {
    characters.add(new Character(character))
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
    return locals?.map((char, i) => <SelectLocalMonstersCard key={i}
      character={char}
      removeLocalMonster={removeLocalMonster}
      addCharacter={addCharacter} />)
  }

  return (
    <>
    <div id="local-character-selection" dir='rtl'>

      {renderLocalMonsters()}

    </div>

    <button id="remove-all-locals" onClick={clearLocals}>Clear All</button>
    </>
  )

}

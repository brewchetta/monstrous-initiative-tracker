import { useState, useContext } from "react"
import { CharactersContext } from "../../context/characters-context"
// import Character from '../../models/Character.js'
import SelectLocalMonstersCard from './SelectLocalMonstersCard'

export default function SelectLocalMonstersForm() {

  // STATE //
  const [locals, setLocals] = useState([])
  const dispatch = useContext(CharactersContext)[1]

  // LOCAL STORAGE //

  const removeLocalMonster = monster => {
    // TODO: STUFF HERE
    console.log("do stuff")
  }

  const localMonsters = () => JSON.parse(localStorage.getItem("monstrous-characters"))

  const clearLocalMonsters = () => localStorage.removeItem("monstrous-characters")

  const saveLocalMonster = () => {
    let locals
    if (localMonsters()) {
      locals = localMonsters()
      locals.push(formInputs)
    } else {
      locals = [formInputs]
    }
    localStorage.setItem("monstrous-characters", JSON.stringify(locals))
  }

  // RENDER //

  const renderLocalMonsters = () => {
    locals.map(char => <SelectLocalMonstersCard character={char} />)
  }

  return (
    <div>

      {renderLocalMonsters()}

    </div>
  )

}

import { useState, useContext } from "react"
import Character from '../../models/Character.js'
import { CharactersContext } from "../../context/characters-context"
import { getMonster } from "../../services/dnd-5e-api"

export default function SearchForm() {

  // STATE //
  const [locals, setLocals] = useState([])
  const dispatch = useContext(CharactersContext)[1]

  // LOCAL STORAGE //

  const removeLocalMonster = monster => {
    console.log("do stuff")
  }

  const localMonsters = () => localStorage.getItem("monstrous-characters")

  const clearLocalMonsters = () => localStorage.removeItem("monstrous-characters")

  const saveLocalMonster = () => {
    let locals
    if (localMonsters()) {
      locals = JSON.parse(localMonsters())
      locals.push(formInputs)
    } else {
      locals = [formInputs]
    }
    localStorage.setItem("monstrous-characters", JSON.stringify(locals))
  }

  // RENDER //

  const renderLocalMonsters = () => {

  }

  return (
    <div>

      {renderLocalMonsters()}

    </div>
  )

}

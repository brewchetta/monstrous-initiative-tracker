import { useState, useContext } from "react"
import Character from '../../models/Character.js'
import { CharactersContext } from "../../context/characters-context"
import { getMonster } from "../../services/dnd-5e-api"

export default function SearchForm() {

  const [input, setInput] = useState("")
  const [mode] = useState("Monster")
  const [message, setMessage] = useState("")
  const dispatch = useContext(CharactersContext)[1]

  // TODO: add mode search for spells

  const handleSubmit = e => {
    e.preventDefault()
    getMonster(input).then(data => {
      if (!data.error) {
        dispatch({type: "ADD_CHARACTER", payload: new Character(data)})
      } else {
        setMessage("Couldn't find that in the monster manual")
      }
    })
  }

  return (
    <form id="search-form" onSubmit={handleSubmit}>

      <p>{message}</p>

      <label>Find a {mode}</label>
      <input type="text"
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder={"search here"}/>

      <input type="submit"
      value={"Search"}/>

    </form>
  )

}

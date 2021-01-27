import { useState, useContext } from "react"
import Character from '../../models/Character.js'
import { CharactersContext } from "../../context/characters-context"

export default function SearchForm() {

  const [input, setInput] = useState("")
  const [mode, setMode] = useState("Monster")
  const [message, setMessage] = useState("")
  const [characters, dispatch] = useContext(CharactersContext)

  // TODO: add mode select for spells

  const handleSubmit = e => {
    e.preventDefault()
    Character.search(input).then(character => {
      if (character) {
        dispatch({type: "ADD_CHARACTER", payload: character})
        setInput("")
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
      placeholder={search here}/>

      <input type="submit"
      value={Search}/>

    </form>
  )

}

import { useState } from "react"
import Character from '../../models/Character.js'

export default function SearchForm() {

  const [input, setInput] = useState("")
  const [mode, setMode] = useState("Monster")

  // TODO: add mode select for spells

  const handleSubmit = (event) => {
    console.log(`Find ${mode} firing`)
  }

  return (
    <form id="search-form" onSubmit={handleSubmit}>

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

import { useState, useRef, useEffect } from "react"
import { getSpell } from "services/dnd-5e-api"
import SpellDetailsView from '../tooltip/SpellDetailsView'

export default function SearchForm({spellNames}) {

  const inputField = useRef(null)

  // STATE //
  const [input, setInput] = useState("")
  const [message, setMessage] = useState("")
  const [spellDetails, setSpellDetails] = useState({})

  // EFFECTS //

  useEffect(() => {
    inputField.current.focus()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    getSpell(input.toLowerCase().replace(/['-]/g,"")).then(data => {
      if (!data.error) {
        setMessage("")
        setSpellDetails(data)
      } else {
        setMessage("Couldn't retrieve that spell")
      }
    })
  }

  const renderDatalistOptions = () => spellNames.map(s => <option key={s} value={s} />)

  return (
    <form id="search-form" onSubmit={handleSubmit}>

      <br/>

      <div id="search-inputs">

        <label>Find a Spell </label>
        <input type="text"
        ref={inputField}
        list="spell-names"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={"search here"}/>

        <datalist id="spell-names">
          {renderDatalistOptions()}
        </datalist>

        <input type="submit"
        value={"Search"}/>

      </div>

      {spellDetails.name ? <SpellDetailsView spellDetails={spellDetails} /> : <p>{message}</p>}

    </form>
  )

}

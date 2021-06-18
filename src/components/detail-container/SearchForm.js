import { useState, useRef, useEffect } from "react"
import Character from 'models/Character.js'
import { useCharactersContext } from "context/characters-context"
import { getMonster, getSpell } from "services/dnd-5e-api"
import SpellDetailsView from '../tooltip/SpellDetailsView'

export default function SearchForm({monsterNames, spellNames, additionalMonsters}) {

  const inputField = useRef(null)

  // STATE //
  const [input, setInput] = useState("")
  const [mode, setMode] = useState("Monster")
  const [message, setMessage] = useState("")
  const [spellDetails, setSpellDetails] = useState({})
  const addCharacter = useCharactersContext().add

  // EFFECTS //

  useEffect(() => {
    inputField.current.focus()
  }, [])

  const handleSubmitMonster = e => {
    e.preventDefault()
    const foundMonster = Object.values(additionalMonsters).find(m => m.name.toLowerCase() === input.toLowerCase())
    foundMonster && addCharacter(new Character(foundMonster))
    foundMonster && setMessage(`Added ${foundMonster.name}`)
    !foundMonster && getMonster(input).then(data => {
      if (!data.error) {
        addCharacter(new Character(data))
        setMessage(`Added ${data.name}!`)
      } else {
        setMessage("Couldn't find that in the monster manual")
      }
    })
  }

  const handleSubmitSpell = e => {
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

  const handleSubmit = e => {
    if (mode === "Monster") {
      handleSubmitMonster(e)
    } else {
      handleSubmitSpell(e)
    }
  }

  const handleChangeMode = e => {
    setSpellDetails({})
    setMessage("")
    setMode(mode === "Monster" ? "Spell" : "Monster")
  }

  const renderDatalistOptions = () => (
    mode === "Spell" ? spellNames.map(s => <option key={s} value={s} />)
    : monsterNames.map(n => <option key={n} value={n} />)
  )

  return (
    <form id="search-form" onSubmit={handleSubmit}>

      <div id="search-inputs">

        <label>Find a {mode}</label>
        <input type="text"
        ref={inputField}
        list="monster-names"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={"search here"}/>

        <datalist id="monster-names">
          {renderDatalistOptions()}
        </datalist>

        <label>Search Spells?</label>
        <input type="checkbox"
        name="mode-select"
        onChange={handleChangeMode}
        checked={mode === "Spell"}
        />

        <input type="submit"
        value={"Search"}/>

      </div>

      {spellDetails.name ? <SpellDetailsView spellDetails={spellDetails} /> : <p>{message}</p>}

    </form>
  )

}

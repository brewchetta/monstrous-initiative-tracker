import { useState, useRef, useEffect } from "react"
import Character from 'models/Character.js'
import { useCharactersContext } from "context/characters-context"
import { getMonster } from "services/dnd-5e-api"
import FileUploader from '../file-uploader'
import { getAllMonsters } from "services/dnd-5e-api"

export default function MonsterSearchForm({additionalMonsters}) {

  const inputField = useRef(null)

  // STATE //
  const [monsterNames, setMonsterNames] = useState([])
  const [input, setInput] = useState("")
  const [message, setMessage] = useState("")
  const addCharacter = useCharactersContext().add

  // EFFECTS //

  useEffect(() => {
    getAllMonsters().then(({results}) => setMonsterNames([...results.map(m => m.name), ...Character.uploadedCharacterNames]))
  }, [])

  useEffect(() => {
    inputField.current.focus()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const foundMonster = Character.uploadedCharacters.find(m => m.name.toLowerCase() === input.toLowerCase())
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

  const addCharacterFromFile = character => {
    addCharacter(character)
    setMessage(`Added ${character.name}`)
    setMonsterNames([...monsterNames, character.name].sort())
  }

  const renderDatalistOptions = () => monsterNames.map(n => <option key={n} value={n} />)

  return (
    <form id="search-form" onSubmit={handleSubmit}>

      <br/>

      <div id="search-inputs">

        <label>Find a Monster</label>
        <input type="text"
        ref={inputField}
        list="monster-names"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={"search here"}/>

        <datalist id="monster-names">
          {renderDatalistOptions()}
        </datalist>

        <input type="submit"
        value={"Search"}/>

        <br/>

        <FileUploader addCharacter={addCharacterFromFile} setMessage={setMessage} />

        {message ? <p>{message}</p> : null}

      </div>

    </form>
  )

}

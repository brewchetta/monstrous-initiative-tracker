import { useState, useRef, useEffect } from "react"
import Character from 'models/Character.js'
import { useCharactersContext } from "context/characters-context"
import { getMonster } from "services/dnd-5e-api"
import FileUploader from '../file-uploader'

export default function MonsterSearchForm({monsterNames, additionalMonsters}) {

  const inputField = useRef(null)

  // STATE //
  const [input, setInput] = useState("")
  const [message, setMessage] = useState("")
  const addCharacter = useCharactersContext().add

  // EFFECTS //

  useEffect(() => {
    inputField.current.focus()
  }, [])

  const handleSubmit = e => {
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

  const addCharacterFromFile = addedChar => {
    try {
      const character = new Character(addedChar)
      addCharacter(character)
      setMessage(`Added ${character.name}`)
    } catch (error) {
      setMessage('There was an error uploading!')
      console.warn(error)
    }

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

        <FileUploader addCharacter={addCharacterFromFile} />

        {message ? <p>{message}</p> : null}

      </div>

    </form>
  )

}

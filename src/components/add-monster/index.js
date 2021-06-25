import { useState } from "react"
import { useCharactersContext } from "context/characters-context"
import UploadMonster from './UploadMonster'
import MonsterSearch from './MonsterSearch'
import SelectLocalMonstersForm from './SelectLocalMonstersForm'
import './style.css'

export default function AddMonster({additionalMonsters}) {

  // STATE //

  const [message, setMessage] = useState('')
  const [mode, setMode] = useState('')
  const addCharacter = useCharactersContext().add

  // EVENTS //

  const handleClick = ({target: {name}}) => {
    setMode(name)
    setMessage('')
  }

  // RENDER //

  const renderMode = () => {
    switch (mode) {
      case 'search':
        return <MonsterSearch {...{additionalMonsters, setMessage, addCharacter}}/>
      case 'upload':
        return <UploadMonster {...{setMessage, addCharacter}}/>
      case 'saved':
        return <SelectLocalMonstersForm {...{additionalMonsters, setMessage, addCharacter}}/>
      default:
        return null
    }
  }

  return (
    <div id='add-monster-container'>
      <button name='search' onClick={handleClick}>Search Monster</button>
      <button name='upload' onClick={handleClick}>Upload Monster</button>
      <button name='saved' onClick={handleClick}>Saved Monsters</button>
      {renderMode()}
      {message ? <p id='add-monster-message'>{message}</p> : null}
    </div>
  )

}

import { useState, useRef, useEffect } from "react"
import Character from 'models/Character.js'
import { useCharactersContext } from "context/characters-context"
import { getMonster } from "services/dnd-5e-api"
import UploadMonster from './UploadMonster'
import MonsterSearch from './MonsterSearch'
import { getAllMonsters } from "services/dnd-5e-api"

export default function AddMonster({additionalMonsters}) {

  // STATE //

  const [message, setMessage] = useState('')
  const [mode, setMode] = useState('search')
  const addCharacter = useCharactersContext().add

  // RENDER //

  const renderMode = () => {
    switch (mode) {
      case 'search':
        return <MonsterSearch {...{additionalMonsters, setMessage, addCharacter}}/>
      case 'upload':
        return <UploadMonster {...{setMessage, addCharacter}}/>
      case 'saved':
        return <MonsterSearch {...{additionalMonsters, setMessage, addCharacter}}/>
      default:
        return null
    }
  }

  return (
    <div>
      <button onClick={() => setMode('search')}>Search Monster</button>
      <button onClick={() => setMode('upload')}>Upload Monster</button>
      <button onClick={() => setMode('saved')}>Saved Monsters</button>
      {renderMode()}
      {message ? <p>{message}</p> : null}
    </div>
  )

}

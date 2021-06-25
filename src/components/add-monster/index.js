import { useState } from "react"
import { useCharactersContext } from "context/characters-context"
import UploadMonster from './UploadMonster'
import MonsterSearch from './MonsterSearch'
import SelectLocalMonstersForm from './SelectLocalMonstersForm'

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
        return <SelectLocalMonstersForm {...{additionalMonsters, setMessage, addCharacter}}/>
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

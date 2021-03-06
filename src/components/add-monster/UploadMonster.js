import { useRef, useState } from 'react'
import Character from '../../models/Character'

export default function UploadMonster({addCharacter, setMessage}) {

  const file = useRef(null)

  const [uploadedMonster, setUploadedMonster] = useState(null)
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleChange = e => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = event => {
      try {
        setUploadedMonster(new Character(JSON.parse(event.target.result)))
        setUploadedFile(JSON.parse(event.target.result))
      } catch (error) {
        console.warn('Could not upload file: \n', error)
        setMessage('Could not build a character from this file')
      }
    };
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (uploadedMonster) {
      addCharacter(uploadedMonster)
      setMessage(`Added ${uploadedMonster.name}`)
      Character.addUploadedCharacter(uploadedFile)
      setUploadedMonster(new Character(uploadedFile))
    }
  }

  const renderSubmitButton = uploadedMonster?.name ?
  (<input type="button" onClick={handleSubmit} value={`Upload ${uploadedMonster.name}`} />)
  : <input disabled type="button" value='Upload JSON' />

  return (
    <div id='file-uploader'>
      <p>Upload a monster from JSON</p>
      <input type="file" ref={file} onChange={handleChange} accept=".json" />
      {renderSubmitButton}
    </div>
  )
}

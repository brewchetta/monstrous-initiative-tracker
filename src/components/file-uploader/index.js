import { useRef, useState } from 'react'
import './style.css'
import Character from '../../models/Character'

export default function FileUploader({addCharacter, setMessage}) {

  const file = useRef(null)

  const [uploadedMonster, setUploadedMonster] = useState(null)

  const handleChange = e => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = event => {
      try {
        setUploadedMonster(new Character(JSON.parse(event.target.result)))
      } catch (error) {
        console.warn('Could not upload file: \n', error)
        setMessage('Could not build a character from this file')
      }
    };
  }

  const handleSubmit = e => {
    e.preventDefault()
    uploadedMonster && addCharacter(uploadedMonster)
  }

  const renderSubmitButton = uploadedMonster?.name ?
  (<input type="button" onClick={handleSubmit} value={`Upload ${uploadedMonster.name}`} />)
  : <input disabled type="button" value='Upload JSON' />

  return (
    <div id='file-uploader'>
      <p>OR upload a monster from JSON</p>
      <input type="file" ref={file} onChange={handleChange} accept=".json" />
      <br/>
      {renderSubmitButton}
    </div>
  )
}

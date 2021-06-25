import { useRef, useState } from 'react'
import './style.css'

export default function FileUploader({addCharacter}) {

  const file = useRef(null)

  const [uploadedMonster, setUploadedMonster] = useState(null)

  const handleChange = e => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = event => {
      setUploadedMonster(JSON.parse(event.target.result))
    };
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Uploaded Monster: ", uploadedMonster)
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

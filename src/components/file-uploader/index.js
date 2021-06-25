import { useRef, useState } from 'react'

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
    uploadedMonster && addCharacter(uploadedMonster)
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" ref={file} onChange={handleChange} accept=".json" />
      <input type="submit" value="Upload Monster" />
    </form>
  )
}

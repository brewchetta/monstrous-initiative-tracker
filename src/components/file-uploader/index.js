import { useRef } from 'react'

export default function FileUploader(props) {

  const file = useRef(null)

  const handleChange = e => {
    const fileReader = new FileReader()
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = event => {
      console.log("event.target.result", JSON.parse(event.target.result));
    };
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" ref={file} onChange={handleChange} accept=".json" />
      <input type="submit" value="Upload File" />
    </form>
  )
}

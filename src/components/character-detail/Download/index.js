export default function Download({character}) {

  const download = () => {
    var a = document.createElement("a");
    var file = new Blob([JSON.stringify(character)], {type: 'text/plain'})
    a.href = URL.createObjectURL(file);
    a.download = `${character.name.replace(/[ ,.'"`]+/g, "-").toLowerCase() || 'monster'}.json`
    a.click();
    a.remove()
  }

  return (
    <input id="download-json-button" type="button" value='Download' onClick={download} />
  )
}

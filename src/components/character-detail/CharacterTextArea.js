export default function CharacterTextArea({name, value, handleChange, width, height}) {

  const handleKeyPress = (e) => e.key === "Enter" && e.target.blur()

  return <span style={{width: "100%"}} className="character-detail-field text-area-field">
    <textarea onChange={handleChange}
      style={{width, height}}
      name={name}
      value={value}
      onKeyUp={handleKeyPress}
      placeholder={name.replace("_"," ")}/>
  </span>

}

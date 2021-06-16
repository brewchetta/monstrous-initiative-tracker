export default function CharacterTextInput({name, value, handleChange, width}) {

  return <span style={{width}} className="character-detail-field text-input">
  <input type="text"
    onChange={handleChange}
    name={name}
    value={value}
    placeholder={name.replace("_"," ")}/>
  </span>

}

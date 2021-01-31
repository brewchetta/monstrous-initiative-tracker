export default function CharacterSelectField({name, options, handleChange, currentInput}) {

  return (
    <select onChange={handleChange}
    className="character-detail-select-field"
    name={name}
    value={currentInput}>
      <option disabled value="">---</option>
      {options.map(name => <option key={name} value={name}>{name}</option>)}
    </select>
  )

}

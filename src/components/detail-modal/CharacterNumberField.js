import { useState, useRef, useEffect } from "react"

export default function CharacterNumberField({name, value, handleChange}) {

  const [focused, setFocused] = useState(false)
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
  }, [focused]);

  const handleClick = () => !focused && setFocused(true)

  const renderInput = () => (
    <input type="number"
    onChange={handleChange}
    name={name}
    value={value}
    ref={focusedInput}
    onBlur={() => setFocused(!focused)}
    placeholder={name.replace("_"," ")}/>
  )

  return (
    <span onClick={handleClick} className="character-detail-field number-field">
      {focused ? renderInput() : (value || 0)}
    </span>
  )

}

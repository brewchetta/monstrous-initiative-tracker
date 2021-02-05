import { useState, useRef, useEffect } from "react"

export default function CharacterTextInput({name, value, handleChange, width}) {

  const [focused, setFocused] = useState(false)
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
  }, [focused]);

  const handleClick = () => !focused && setFocused(true)

  const renderArea = () => (
    <input type="text"
    onChange={handleChange}
    name={name}
    value={value}
    ref={focusedInput}
    placeholder={name.replace("_"," ")}/>
  )
  // onBlur={() => setFocused(!focused)}

  return <span onClick={handleClick} style={{width}} className="character-detail-field text-input">
    {focused ? renderArea() : (value || `+`)}
  </span>

}

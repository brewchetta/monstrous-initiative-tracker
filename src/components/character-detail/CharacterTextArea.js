import { useState, useRef, useEffect } from "react"

export default function CharacterTextArea({name, value, handleChange, width, height}) {

  const [focused, setFocused] = useState(false)
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
  }, [focused]);

  const handleClick = () => !focused && setFocused(true)

  const handleKeyPress = ({key}) => key === "Enter" && setFocused(false)

  const renderArea = () => (
    <textarea onChange={handleChange}
    style={{width, height}}
    name={name}
    value={value}
    ref={focusedInput}
    onKeyUp={handleKeyPress}
    onBlur={() => setFocused(!focused)}
    placeholder={name.replace("_"," ")}/>
  )

  return <span onClick={handleClick} className="character-detail-field text-area-field">
    {focused ? renderArea() : (value || `add ${name}`)}
  </span>

}

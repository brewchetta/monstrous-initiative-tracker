import { useState, useRef, useEffect } from "react"

export default function CharacterTextArea({name, value, handleChange, width, height}) {

  const [focused, setFocused] = useState(false)
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
  }, [focused]);

  const handleClick = () => {
    if (!focused) {
      setFocused(true)
    }
  }

  const renderArea = () => (
    <textarea onChange={handleChange}
    style={{width, height}}
    name={name}
    value={value}
    ref={focusedInput}
    onBlur={() => setFocused(!focused)}
    placeholder={name.replace("_"," ")}/>
  )

  return <span onClick={handleClick}>{focused ? renderArea() : (value || "Add Proficiencies")}</span>

}

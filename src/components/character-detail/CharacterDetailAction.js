import { useState, useRef, useEffect } from 'react'

export default function CharacterDetailAction({action, index, handleSubmit}) {

  // STATE //

  const [input, setInput] = useState(action.full_description)
  const [focused, setFocused] = useState(false)
  const [height, setHeight] = useState("5px")
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
    focused && setHeight(focusedInput.current.scrollHeight + "px")
  }, [focused])

  // EVENT HANDLERS //

  const handleChange = e => {
    setInput(e.target.value)
    setHeight(focusedInput.current.scrollHeight + "px")
  }

  const handleBlur = e => {
    handleSubmit(input, index)
    setFocused(false)
  }

  // RENDER //

  const renderInput = () => (
    <textarea className="action-input-textarea"
      style={{height}}
      onChange={handleChange}
      onBlur={handleBlur}
      value={input}
      placeholder={"add an action here..."}
      ref={focusedInput} />
    )

  const renderSpan = () => <span onClick={() => setFocused(true)}>{input}</span>

  return (
    focused ? renderInput() : renderSpan()
  )

}

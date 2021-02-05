import { useState, useRef, useEffect } from 'react'

export default function CharacterDetailAction({action, index, handleSubmit}) {

  // STATE //

  const [input, setInput] = useState(action.full_description)
  const [focused, setFocused] = useState(false)
  const focusedInput = useRef(null)

  useEffect(() => {
    focused && focusedInput.current.focus()
  }, [focused])

  // EVENT HANDLERS //

  const handleChange = e => setInput(e.target.value)
  const handleBlur = e => {
    handleSubmit(input, index)
    setFocused(false)
  }

  // RENDER //

  const renderInput = () => (
    <textarea className="action-input-textarea"
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

import { useState, useRef, useEffect } from 'react'

export default function Action({action, index, handleSubmit}) {

  // STATE //

  const [input, setInput] = useState(action.full_description)
  const [height, setHeight] = useState("5px")
  const focusedInput = useRef(null)

  useEffect(() => setHeight(focusedInput.current.scrollHeight + "px"), [])

  // EVENT HANDLERS //

  const handleChange = e => {
    setInput(e.target.value)
    setHeight(focusedInput.current.scrollHeight + "px")
  }

  const handleBlur = e => {
    handleSubmit(input.replace(/"\n","&nbsp"/), index)
  }

  const handleFocus = e => {

  }

  // RENDER //

  return (
    <textarea className="action-input-textarea"
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{height}}
      onChange={handleChange}
      value={input}
      placeholder={"add an action here..."}
      ref={focusedInput} />
  )

}

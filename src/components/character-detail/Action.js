import { useState, useRef, useEffect } from 'react'

export default function Action({action, index, handleSubmit}) {

  // STATE //

  const [input, setInput] = useState(action.full_description)
  const [height, setHeight] = useState("5px")
  const inputForm = useRef(null)

  useEffect(() => {
    const computedPadding = parseInt(getComputedStyle(inputForm.current).paddingTop) + parseInt(getComputedStyle(inputForm.current).paddingBottom)
    setHeight((inputForm.current.scrollHeight - computedPadding) + "px")
  }, [])

  // EVENT HANDLERS //

  const handleChange = e => {
    // since padding is absent from calculated height, we need to subtract it from the scrollHeight
    const computedPadding = parseInt(getComputedStyle(e.target).paddingTop) + parseInt(getComputedStyle(e.target).paddingBottom)
    setInput(e.target.value)
    setHeight((e.target.scrollHeight - computedPadding) + "px")
  }

  const handleBlur = e => {
    handleSubmit(input.replace(/"\n","&nbsp"/), index)
  }

  // RENDER //

  return (
    <textarea className="action-input-textarea"
      ref={inputForm}
      onBlur={handleBlur}
      style={{height}}
      onChange={handleChange}
      value={input}
      placeholder={"add an action here..."} />
  )

}

import { useState, useRef, useEffect } from 'react'

export default function CharacterTextArea({name, value, handleChange, width}) {

  const [height, setHeight] = useState("5px")
  const inputForm = useRef(null)

  // STATE //

  useEffect(() => {
    const computedPadding = parseInt(getComputedStyle(inputForm.current).paddingTop) + parseInt(getComputedStyle(inputForm.current).paddingBottom)
    setHeight((inputForm.current.scrollHeight - computedPadding) + "px")
  }, [])

  // EVENT HANDLERS //

  const handleComputedChange = e => {
    // since padding is absent from calculated height, we need to subtract it from the scrollHeight
    const computedPadding = parseInt(getComputedStyle(e.target).paddingTop) + parseInt(getComputedStyle(e.target).paddingBottom)
    setHeight((e.target.scrollHeight - computedPadding) + "px")
    handleChange(e)
  }

  const handleKeyPress = (e) => e.key === "Enter" && e.target.blur()

  return <span style={{width: "100%"}} className="character-detail-field text-area-field">
    <textarea onChange={handleComputedChange}
      ref={inputForm}
      style={{width, height}}
      name={name}
      value={value}
      onKeyUp={handleKeyPress}
      placeholder={name.replace("_"," ")}/>
  </span>

}

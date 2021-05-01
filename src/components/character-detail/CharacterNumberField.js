import { useState, useRef, useEffect } from "react"

export default function CharacterNumberField({name, value, handleChange}) {

  return (
    <span className="character-detail-field number-field">
      <input type="number"
        onChange={handleChange}
        name={name}
        value={value}
        placeholder={name.replace("_"," ")}/>
    </span>
  )

}
